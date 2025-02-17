import { z } from "zod";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Query = {
  __typename?: "Query";
  hello?: Maybe<Scalars["String"]["output"]>;
};

export type TestInput = {
  address: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny =>
  v !== undefined && v !== null;

export const definedNonNullAnySchema = z
  .any()
  .refine((v) => isDefinedNonNullAny(v));

export function TestInputSchema(): z.ZodObject<Properties<TestInput>> {
  return z.object({
    address: z
      .string()
      .min(1, "住所を入力してください")
      .regex(
        /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFFs]+$/,
        "住所は日本語で入力してください"
      ),
    email: z.string().min(1, "メールを入力してください"),
    name: z
      .string()
      .min(1, "名前を入力してください")
      .regex(
        /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFFsA-Za-z0-9-]+$/,
        "名前は日本語またはアルファベットで入力してください"
      ),
  });
}
