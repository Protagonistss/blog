// Coze 智能助手配置文件

export interface CozeConfig {
  botId: string;
  title: string;
  token: string;
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  showOnMobile: boolean;
  enableKeyboardShortcut: boolean;
  enableNotifications: boolean;
  theme: 'light' | 'dark' | 'auto';
}

// 默认配置
export const defaultCozeConfig: CozeConfig = {
  botId: '7557962207624609842',
  title: '智能助手',
  token: '', // 请通过环境变量 PUBLIC_COZE_TOKEN 设置
  position: 'bottom-right',
  showOnMobile: true,
  enableKeyboardShortcut: true,
  enableNotifications: true,
  theme: 'auto'
};

// 环境变量配置（如果使用环境变量）
export const getCozeConfig = (): CozeConfig => {
  return {
    botId: import.meta.env.PUBLIC_COZE_BOT_ID || defaultCozeConfig.botId,
    title: import.meta.env.PUBLIC_COZE_TITLE || defaultCozeConfig.title,
    token: import.meta.env.PUBLIC_COZE_TOKEN || defaultCozeConfig.token,
    position: (import.meta.env.PUBLIC_COZE_POSITION as CozeConfig['position']) || defaultCozeConfig.position,
    showOnMobile: import.meta.env.PUBLIC_COZE_SHOW_ON_MOBILE !== 'false',
    enableKeyboardShortcut: import.meta.env.PUBLIC_COZE_KEYBOARD_SHORTCUT !== 'false',
    enableNotifications: import.meta.env.PUBLIC_COZE_NOTIFICATIONS !== 'false',
    theme: (import.meta.env.PUBLIC_COZE_THEME as CozeConfig['theme']) || defaultCozeConfig.theme
  };
};

// 验证配置
export const validateCozeConfig = (config: CozeConfig): boolean => {
  if (!config.botId || config.botId === '') {
    console.warn('Coze: botId 未配置');
    return false;
  }
  
  if (!config.token || config.token === '' || config.token === 'pat_********') {
    console.warn('Coze: 请通过环境变量 PUBLIC_COZE_TOKEN 配置有效的 token');
    return false;
  }
  
  return true;
};
