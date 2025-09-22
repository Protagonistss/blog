declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"css-css-样式选中.md": {
	id: "css-css-样式选中.md";
  slug: "css-css-样式选中";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css-div-横向排列和出现横向滚动条.md": {
	id: "css-div-横向排列和出现横向滚动条.md";
  slug: "css-div-横向排列和出现横向滚动条";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"db-mongo.md": {
	id: "db-mongo.md";
  slug: "db-mongo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"deploy-travis-ci.md": {
	id: "deploy-travis-ci.md";
  slug: "deploy-travis-ci";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"docker-docker.md": {
	id: "docker-docker.md";
  slug: "docker-docker";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"git-git-branch.md": {
	id: "git-git-branch.md";
  slug: "git-git-branch";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"java-tomcat.md": {
	id: "java-tomcat.md";
  slug: "java-tomcat";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"javascript-bind.md": {
	id: "javascript-bind.md";
  slug: "javascript-bind";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"javascript-cal-exp.md": {
	id: "javascript-cal-exp.md";
  slug: "javascript-cal-exp";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"javascript-eslint.md": {
	id: "javascript-eslint.md";
  slug: "javascript-eslint";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"javascript-link-list.md": {
	id: "javascript-link-list.md";
  slug: "javascript-link-list";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"javascript-triangle.md": {
	id: "javascript-triangle.md";
  slug: "javascript-triangle";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"linux-platform-install.md": {
	id: "linux-platform-install.md";
  slug: "linux-platform-install";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"linux-scp.md": {
	id: "linux-scp.md";
  slug: "linux-scp";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"linux-website.md": {
	id: "linux-website.md";
  slug: "linux-website";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"linux-查看使用的端口.md": {
	id: "linux-查看使用的端口.md";
  slug: "linux-查看使用的端口";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nginx-nginx依赖.md": {
	id: "nginx-nginx依赖.md";
  slug: "nginx-nginx依赖";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nginx-rewrite.md": {
	id: "nginx-rewrite.md";
  slug: "nginx-rewrite";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"node-Yarn的安装.md": {
	id: "node-Yarn的安装.md";
  slug: "node-yarn的安装";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"node-debug-v8.md": {
	id: "node-debug-v8.md";
  slug: "node-debug-v8";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"node-node安装.md": {
	id: "node-node安装.md";
  slug: "node-node安装";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"node-nvm.md": {
	id: "node-nvm.md";
  slug: "node-nvm";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"python-pymysql.md": {
	id: "python-pymysql.md";
  slug: "python-pymysql";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"python-setup.md": {
	id: "python-setup.md";
  slug: "python-setup";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"rust-rust-start.md": {
	id: "rust-rust-start.md";
  slug: "rust-rust-start";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"utils-vim.md": {
	id: "utils-vim.md";
  slug: "utils-vim";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"vue-framework.md": {
	id: "vue-framework.md";
  slug: "vue-framework";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"vue-vue-extend.md": {
	id: "vue-vue-extend.md";
  slug: "vue-vue-extend";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"vue-vue-unit-test.md": {
	id: "vue-vue-unit-test.md";
  slug: "vue-vue-unit-test";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"webpack-transfer-css.md": {
	id: "webpack-transfer-css.md";
  slug: "webpack-transfer-css";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"webpack-webpack构建vue项目.md": {
	id: "webpack-webpack构建vue项目.md";
  slug: "webpack-webpack构建vue项目";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
