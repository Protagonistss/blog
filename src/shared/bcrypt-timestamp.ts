import bcryptModule from 'bcryptjs';

type BcryptModule = typeof import('bcryptjs');

const resolvedBcrypt = (bcryptModule as BcryptModule).default ?? (bcryptModule as BcryptModule);

type ElementId =
  | 'bcrypt-password'
  | 'bcrypt-rounds'
  | 'bcrypt-generate'
  | 'bcrypt-hash'
  | 'bcrypt-verify-text'
  | 'bcrypt-verify-hash'
  | 'bcrypt-verify'
  | 'bcrypt-verify-result'
  | 'timestamp-input'
  | 'datetime-input'
  | 'to-datetime'
  | 'to-timestamp'
  | 'local-result'
  | 'utc-result'
  | 'now-fill';

function getElement<T extends HTMLElement>(id: ElementId): T {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Element not found: ${id}`);
  }
  return el as T;
}

const formatDate = (date: Date): string => {
  const pad = (value: number): string => value.toString().padStart(2, '0');
  const yyyy = date.getFullYear();
  const MM = pad(date.getMonth() + 1);
  const dd = pad(date.getDate());
  const HH = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());
  return `${yyyy}-${MM}-${dd} ${HH}:${mm}:${ss}`;
};

const parseDateTime = (input: string): Date | null => {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const normalized = trimmed.replace(' ', 'T');
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return null;
  return date;
};

const isProbablyMillis = (value: number): boolean => value > 1e12;

const toDateFromTimestampText = (text: string): Date | null => {
  const raw = text.trim();
  if (!raw) return null;
  if (!/^\d{10,13}$/.test(raw)) return null;
  const numeric = Number(raw);
  if (Number.isNaN(numeric)) return null;
  const ms = isProbablyMillis(numeric) ? numeric : numeric * 1000;
  const date = new Date(ms);
  if (Number.isNaN(date.getTime())) return null;
  return date;
};

const disableBcryptControls = (message: string): void => {
  const generateBtn = document.getElementById('bcrypt-generate') as HTMLButtonElement | null;
  const verifyBtn = document.getElementById('bcrypt-verify') as HTMLButtonElement | null;
  if (generateBtn) {
    generateBtn.setAttribute('disabled', 'true');
    generateBtn.textContent = message;
  }
  if (verifyBtn) {
    verifyBtn.setAttribute('disabled', 'true');
    verifyBtn.textContent = message;
  }
};

const renderDateOutputs = (
  date: Date | null,
  localResultEl: HTMLElement,
  utcResultEl: HTMLElement,
): void => {
  if (!date) {
    localResultEl.textContent = '';
    utcResultEl.textContent = '';
    return;
  }
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  localResultEl.textContent = `${formatDate(date)} (本地: ${timeZone})`;
  utcResultEl.textContent = date.toISOString().replace('T', ' ').replace('Z', ' UTC');
};

const init = (): void => {
  const bcrypt = resolvedBcrypt;
  if (!bcrypt) {
    disableBcryptControls('依赖加载失败');
    console.error('无法加载 bcryptjs: 模块解析结果为空');
    return;
  }

  const passwordEl = getElement<HTMLTextAreaElement>('bcrypt-password');
  const roundsEl = getElement<HTMLInputElement>('bcrypt-rounds');
  const generateBtn = getElement<HTMLButtonElement>('bcrypt-generate');
  const hashEl = getElement<HTMLTextAreaElement>('bcrypt-hash');
  const verifyTextEl = getElement<HTMLInputElement>('bcrypt-verify-text');
  const verifyHashEl = getElement<HTMLInputElement>('bcrypt-verify-hash');
  const verifyBtn = getElement<HTMLButtonElement>('bcrypt-verify');
  const verifyResultEl = getElement<HTMLSpanElement>('bcrypt-verify-result');

  const tsInput = getElement<HTMLInputElement>('timestamp-input');
  const dtInput = getElement<HTMLInputElement>('datetime-input');
  const toDatetimeBtn = getElement<HTMLButtonElement>('to-datetime');
  const toTimestampBtn = getElement<HTMLButtonElement>('to-timestamp');
  const localResult = getElement<HTMLDivElement>('local-result');
  const utcResult = getElement<HTMLDivElement>('utc-result');
  const nowFillBtn = getElement<HTMLButtonElement>('now-fill');

  generateBtn.addEventListener('click', async () => {
    const text = passwordEl.value;
    const rounds = Math.min(15, Math.max(4, Number.parseInt(roundsEl.value || '10', 10)));
    if (!text) {
      hashEl.value = '';
      return;
    }
    generateBtn.disabled = true;
    const originalText = generateBtn.textContent ?? '生成 Hash';
    generateBtn.textContent = '生成中…';
    try {
      const salt = await bcrypt.genSalt(rounds);
      const hash = await bcrypt.hash(text, salt);
      hashEl.value = hash;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      hashEl.value = `生成失败：${message}`;
    } finally {
      generateBtn.disabled = false;
      generateBtn.textContent = originalText;
    }
  });

  verifyBtn.addEventListener('click', async () => {
    verifyResultEl.textContent = '';
    const plain = verifyTextEl.value;
    const hash = verifyHashEl.value;
    if (!plain || !hash) {
      verifyResultEl.textContent = '请输入明文与 Hash';
      verifyResultEl.className = 'text-sm text-yellow-600';
      return;
    }
    verifyBtn.disabled = true;
    const originalText = verifyBtn.textContent ?? '验证匹配';
    verifyBtn.textContent = '验证中…';
    try {
      const ok = await bcrypt.compare(plain, hash);
      verifyResultEl.textContent = ok ? '匹配成功 ✅' : '不匹配 ❌';
      verifyResultEl.className = ok ? 'text-sm text-green-600' : 'text-sm text-red-600';
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      verifyResultEl.textContent = `验证失败：${message}`;
      verifyResultEl.className = 'text-sm text-red-600';
    } finally {
      verifyBtn.disabled = false;
      verifyBtn.textContent = originalText;
    }
  });

  toDatetimeBtn.addEventListener('click', () => {
    const date = toDateFromTimestampText(tsInput.value);
    renderDateOutputs(date, localResult, utcResult);
    if (date) {
      dtInput.value = formatDate(date);
    }
  });

  toTimestampBtn.addEventListener('click', () => {
    const date = parseDateTime(dtInput.value);
    renderDateOutputs(date, localResult, utcResult);
    if (date) {
      tsInput.value = Math.floor(date.getTime() / 1000).toString();
    }
  });

  nowFillBtn.addEventListener('click', () => {
    const now = new Date();
    tsInput.value = Math.floor(now.getTime() / 1000).toString();
    dtInput.value = formatDate(now);
    renderDateOutputs(now, localResult, utcResult);
  });
};

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    try {
      init();
    } catch (error) {
      disableBcryptControls('初始化失败');
      console.error('初始化 bcrypt-timestamp 工具失败:', error);
    }
  });
}

