// AUTO-GENERATED FILE. DO NOT EDIT.
// Run the `generate` package script to update this file.
// tslint:disable
import { GraphQLResolveInfo } from 'graphql';
import { Context } from './context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
   __typename: 'Mutation',
  test: Scalars['String'],
};


export type MutationTestArgs = {
  value: Scalars['String']
};

export type Query = {
   __typename: 'Query',
  me: User,
};

export type User = {
   __typename: 'User',
  id: Scalars['String'],
  provider: Scalars['String'],
  identities: Array<UserIdentity>,
  picture: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  email: Maybe<Scalars['String']>,
  emailVerified: Maybe<Scalars['Boolean']>,
  phoneNumber: Maybe<Scalars['String']>,
};

export type UserError = {
   __typename: 'UserError',
  message: Scalars['String'],
};

export type UserIdentity = {
   __typename: 'UserIdentity',
  provider: Scalars['String'],
  ids: Array<Scalars['String']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
  String: ResolverTypeWrapper<Scalars['String']>,
  UserIdentity: ResolverTypeWrapper<UserIdentity>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Mutation: ResolverTypeWrapper<{}>,
  UserError: ResolverTypeWrapper<UserError>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  String: Scalars['String'],
  UserIdentity: UserIdentity,
  Boolean: Scalars['Boolean'],
  Mutation: {},
  UserError: UserError,
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  test: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationTestArgs, 'value'>>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me: Resolver<ResolversTypes['User'], ParentType, ContextType>,
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  provider: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  identities: Resolver<Array<ResolversTypes['UserIdentity']>, ParentType, ContextType>,
  picture: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  emailVerified: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  phoneNumber: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserErrorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserError'] = ResolversParentTypes['UserError']> = {
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserIdentityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserIdentity'] = ResolversParentTypes['UserIdentity']> = {
  provider: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ids: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = Context> = {
  Mutation: MutationResolvers<ContextType>,
  Query: QueryResolvers<ContextType>,
  User: UserResolvers<ContextType>,
  UserError: UserErrorResolvers<ContextType>,
  UserIdentity: UserIdentityResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;

