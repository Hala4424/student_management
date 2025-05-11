
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Prerequisite
 * 
 */
export type Prerequisite = $Result.DefaultSelection<Prisma.$PrerequisitePayload>
/**
 * Model CompletedCourse
 * 
 */
export type CompletedCourse = $Result.DefaultSelection<Prisma.$CompletedCoursePayload>
/**
 * Model InProgressCourse
 * 
 */
export type InProgressCourse = $Result.DefaultSelection<Prisma.$InProgressCoursePayload>
/**
 * Model PendingCourse
 * 
 */
export type PendingCourse = $Result.DefaultSelection<Prisma.$PendingCoursePayload>
/**
 * Model PublishedCourse
 * 
 */
export type PublishedCourse = $Result.DefaultSelection<Prisma.$PublishedCoursePayload>
/**
 * Model Interest
 * 
 */
export type Interest = $Result.DefaultSelection<Prisma.$InterestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Student: 'Student',
  Instructor: 'Instructor',
  Administrator: 'Administrator'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prerequisite`: Exposes CRUD operations for the **Prerequisite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prerequisites
    * const prerequisites = await prisma.prerequisite.findMany()
    * ```
    */
  get prerequisite(): Prisma.PrerequisiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedCourse`: Exposes CRUD operations for the **CompletedCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedCourses
    * const completedCourses = await prisma.completedCourse.findMany()
    * ```
    */
  get completedCourse(): Prisma.CompletedCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inProgressCourse`: Exposes CRUD operations for the **InProgressCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InProgressCourses
    * const inProgressCourses = await prisma.inProgressCourse.findMany()
    * ```
    */
  get inProgressCourse(): Prisma.InProgressCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendingCourse`: Exposes CRUD operations for the **PendingCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingCourses
    * const pendingCourses = await prisma.pendingCourse.findMany()
    * ```
    */
  get pendingCourse(): Prisma.PendingCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publishedCourse`: Exposes CRUD operations for the **PublishedCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublishedCourses
    * const publishedCourses = await prisma.publishedCourse.findMany()
    * ```
    */
  get publishedCourse(): Prisma.PublishedCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interest`: Exposes CRUD operations for the **Interest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interest.findMany()
    * ```
    */
  get interest(): Prisma.InterestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    Class: 'Class',
    Prerequisite: 'Prerequisite',
    CompletedCourse: 'CompletedCourse',
    InProgressCourse: 'InProgressCourse',
    PendingCourse: 'PendingCourse',
    PublishedCourse: 'PublishedCourse',
    Interest: 'Interest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "course" | "class" | "prerequisite" | "completedCourse" | "inProgressCourse" | "pendingCourse" | "publishedCourse" | "interest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Prerequisite: {
        payload: Prisma.$PrerequisitePayload<ExtArgs>
        fields: Prisma.PrerequisiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrerequisiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrerequisiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          findFirst: {
            args: Prisma.PrerequisiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrerequisiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          findMany: {
            args: Prisma.PrerequisiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          create: {
            args: Prisma.PrerequisiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          createMany: {
            args: Prisma.PrerequisiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrerequisiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          delete: {
            args: Prisma.PrerequisiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          update: {
            args: Prisma.PrerequisiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          deleteMany: {
            args: Prisma.PrerequisiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrerequisiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrerequisiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          upsert: {
            args: Prisma.PrerequisiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          aggregate: {
            args: Prisma.PrerequisiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrerequisite>
          }
          groupBy: {
            args: Prisma.PrerequisiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrerequisiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrerequisiteCountArgs<ExtArgs>
            result: $Utils.Optional<PrerequisiteCountAggregateOutputType> | number
          }
        }
      }
      CompletedCourse: {
        payload: Prisma.$CompletedCoursePayload<ExtArgs>
        fields: Prisma.CompletedCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          findFirst: {
            args: Prisma.CompletedCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          findMany: {
            args: Prisma.CompletedCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          create: {
            args: Prisma.CompletedCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          createMany: {
            args: Prisma.CompletedCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          delete: {
            args: Prisma.CompletedCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          update: {
            args: Prisma.CompletedCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          deleteMany: {
            args: Prisma.CompletedCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          upsert: {
            args: Prisma.CompletedCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          aggregate: {
            args: Prisma.CompletedCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedCourse>
          }
          groupBy: {
            args: Prisma.CompletedCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedCourseCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedCourseCountAggregateOutputType> | number
          }
        }
      }
      InProgressCourse: {
        payload: Prisma.$InProgressCoursePayload<ExtArgs>
        fields: Prisma.InProgressCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InProgressCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InProgressCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload>
          }
          findFirst: {
            args: Prisma.InProgressCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InProgressCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload>
          }
          findMany: {
            args: Prisma.InProgressCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload>[]
          }
          create: {
            args: Prisma.InProgressCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload>
          }
          createMany: {
            args: Prisma.InProgressCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InProgressCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload>[]
          }
          delete: {
            args: Prisma.InProgressCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload>
          }
          update: {
            args: Prisma.InProgressCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload>
          }
          deleteMany: {
            args: Prisma.InProgressCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InProgressCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InProgressCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload>[]
          }
          upsert: {
            args: Prisma.InProgressCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressCoursePayload>
          }
          aggregate: {
            args: Prisma.InProgressCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInProgressCourse>
          }
          groupBy: {
            args: Prisma.InProgressCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<InProgressCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.InProgressCourseCountArgs<ExtArgs>
            result: $Utils.Optional<InProgressCourseCountAggregateOutputType> | number
          }
        }
      }
      PendingCourse: {
        payload: Prisma.$PendingCoursePayload<ExtArgs>
        fields: Prisma.PendingCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload>
          }
          findFirst: {
            args: Prisma.PendingCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload>
          }
          findMany: {
            args: Prisma.PendingCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload>[]
          }
          create: {
            args: Prisma.PendingCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload>
          }
          createMany: {
            args: Prisma.PendingCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendingCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload>[]
          }
          delete: {
            args: Prisma.PendingCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload>
          }
          update: {
            args: Prisma.PendingCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload>
          }
          deleteMany: {
            args: Prisma.PendingCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendingCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendingCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload>[]
          }
          upsert: {
            args: Prisma.PendingCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoursePayload>
          }
          aggregate: {
            args: Prisma.PendingCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendingCourse>
          }
          groupBy: {
            args: Prisma.PendingCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingCourseCountArgs<ExtArgs>
            result: $Utils.Optional<PendingCourseCountAggregateOutputType> | number
          }
        }
      }
      PublishedCourse: {
        payload: Prisma.$PublishedCoursePayload<ExtArgs>
        fields: Prisma.PublishedCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublishedCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublishedCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload>
          }
          findFirst: {
            args: Prisma.PublishedCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublishedCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload>
          }
          findMany: {
            args: Prisma.PublishedCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload>[]
          }
          create: {
            args: Prisma.PublishedCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload>
          }
          createMany: {
            args: Prisma.PublishedCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublishedCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload>[]
          }
          delete: {
            args: Prisma.PublishedCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload>
          }
          update: {
            args: Prisma.PublishedCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload>
          }
          deleteMany: {
            args: Prisma.PublishedCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublishedCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublishedCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload>[]
          }
          upsert: {
            args: Prisma.PublishedCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedCoursePayload>
          }
          aggregate: {
            args: Prisma.PublishedCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublishedCourse>
          }
          groupBy: {
            args: Prisma.PublishedCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublishedCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublishedCourseCountArgs<ExtArgs>
            result: $Utils.Optional<PublishedCourseCountAggregateOutputType> | number
          }
        }
      }
      Interest: {
        payload: Prisma.$InterestPayload<ExtArgs>
        fields: Prisma.InterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findFirst: {
            args: Prisma.InterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findMany: {
            args: Prisma.InterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          create: {
            args: Prisma.InterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          createMany: {
            args: Prisma.InterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          delete: {
            args: Prisma.InterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          update: {
            args: Prisma.InterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          deleteMany: {
            args: Prisma.InterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          upsert: {
            args: Prisma.InterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          aggregate: {
            args: Prisma.InterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterest>
          }
          groupBy: {
            args: Prisma.InterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestCountArgs<ExtArgs>
            result: $Utils.Optional<InterestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    course?: CourseOmit
    class?: ClassOmit
    prerequisite?: PrerequisiteOmit
    completedCourse?: CompletedCourseOmit
    inProgressCourse?: InProgressCourseOmit
    pendingCourse?: PendingCourseOmit
    publishedCourse?: PublishedCourseOmit
    interest?: InterestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pendingCourses: number
    completedCourses: number
    inprogressCourses: number
    classes: number
    interests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendingCourses?: boolean | UserCountOutputTypeCountPendingCoursesArgs
    completedCourses?: boolean | UserCountOutputTypeCountCompletedCoursesArgs
    inprogressCourses?: boolean | UserCountOutputTypeCountInprogressCoursesArgs
    classes?: boolean | UserCountOutputTypeCountClassesArgs
    interests?: boolean | UserCountOutputTypeCountInterestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPendingCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingCourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompletedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInprogressCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InProgressCourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    classes: number
    prerequisites: number
    requiredBy: number
    publishedCourses: number
    pendingBy: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | CourseCountOutputTypeCountClassesArgs
    prerequisites?: boolean | CourseCountOutputTypeCountPrerequisitesArgs
    requiredBy?: boolean | CourseCountOutputTypeCountRequiredByArgs
    publishedCourses?: boolean | CourseCountOutputTypeCountPublishedCoursesArgs
    pendingBy?: boolean | CourseCountOutputTypeCountPendingByArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPrerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRequiredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPublishedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublishedCourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPendingByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingCourseWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    completedBy: number
    inProgressBy: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedBy?: boolean | ClassCountOutputTypeCountCompletedByArgs
    inProgressBy?: boolean | ClassCountOutputTypeCountInProgressByArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountCompletedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountInProgressByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InProgressCourseWhereInput
  }


  /**
   * Count Type PublishedCourseCountOutputType
   */

  export type PublishedCourseCountOutputType = {
    interests: number
  }

  export type PublishedCourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interests?: boolean | PublishedCourseCountOutputTypeCountInterestsArgs
  }

  // Custom InputTypes
  /**
   * PublishedCourseCountOutputType without action
   */
  export type PublishedCourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourseCountOutputType
     */
    select?: PublishedCourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublishedCourseCountOutputType without action
   */
  export type PublishedCourseCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    pendingCourses?: boolean | User$pendingCoursesArgs<ExtArgs>
    completedCourses?: boolean | User$completedCoursesArgs<ExtArgs>
    inprogressCourses?: boolean | User$inprogressCoursesArgs<ExtArgs>
    classes?: boolean | User$classesArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendingCourses?: boolean | User$pendingCoursesArgs<ExtArgs>
    completedCourses?: boolean | User$completedCoursesArgs<ExtArgs>
    inprogressCourses?: boolean | User$inprogressCoursesArgs<ExtArgs>
    classes?: boolean | User$classesArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pendingCourses: Prisma.$PendingCoursePayload<ExtArgs>[]
      completedCourses: Prisma.$CompletedCoursePayload<ExtArgs>[]
      inprogressCourses: Prisma.$InProgressCoursePayload<ExtArgs>[]
      classes: Prisma.$ClassPayload<ExtArgs>[]
      interests: Prisma.$InterestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pendingCourses<T extends User$pendingCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$pendingCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    completedCourses<T extends User$completedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$completedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inprogressCourses<T extends User$inprogressCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$inprogressCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends User$classesArgs<ExtArgs> = {}>(args?: Subset<T, User$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interests<T extends User$interestsArgs<ExtArgs> = {}>(args?: Subset<T, User$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pendingCourses
   */
  export type User$pendingCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    where?: PendingCourseWhereInput
    orderBy?: PendingCourseOrderByWithRelationInput | PendingCourseOrderByWithRelationInput[]
    cursor?: PendingCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingCourseScalarFieldEnum | PendingCourseScalarFieldEnum[]
  }

  /**
   * User.completedCourses
   */
  export type User$completedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    cursor?: CompletedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * User.inprogressCourses
   */
  export type User$inprogressCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    where?: InProgressCourseWhereInput
    orderBy?: InProgressCourseOrderByWithRelationInput | InProgressCourseOrderByWithRelationInput[]
    cursor?: InProgressCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InProgressCourseScalarFieldEnum | InProgressCourseScalarFieldEnum[]
  }

  /**
   * User.classes
   */
  export type User$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * User.interests
   */
  export type User$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    cursor?: InterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    category: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    category: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    code: number
    name: number
    category: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    category?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    category?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    category?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    code: string
    name: string
    category: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    category?: boolean
    classes?: boolean | Course$classesArgs<ExtArgs>
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    requiredBy?: boolean | Course$requiredByArgs<ExtArgs>
    publishedCourses?: boolean | Course$publishedCoursesArgs<ExtArgs>
    pendingBy?: boolean | Course$pendingByArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    category?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "category", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Course$classesArgs<ExtArgs>
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    requiredBy?: boolean | Course$requiredByArgs<ExtArgs>
    publishedCourses?: boolean | Course$publishedCoursesArgs<ExtArgs>
    pendingBy?: boolean | Course$pendingByArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      classes: Prisma.$ClassPayload<ExtArgs>[]
      prerequisites: Prisma.$PrerequisitePayload<ExtArgs>[]
      requiredBy: Prisma.$PrerequisitePayload<ExtArgs>[]
      publishedCourses: Prisma.$PublishedCoursePayload<ExtArgs>[]
      pendingBy: Prisma.$PendingCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      category: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Course$classesArgs<ExtArgs> = {}>(args?: Subset<T, Course$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prerequisites<T extends Course$prerequisitesArgs<ExtArgs> = {}>(args?: Subset<T, Course$prerequisitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requiredBy<T extends Course$requiredByArgs<ExtArgs> = {}>(args?: Subset<T, Course$requiredByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publishedCourses<T extends Course$publishedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Course$publishedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pendingBy<T extends Course$pendingByArgs<ExtArgs> = {}>(args?: Subset<T, Course$pendingByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly code: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly category: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.classes
   */
  export type Course$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Course.prerequisites
   */
  export type Course$prerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    cursor?: PrerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Course.requiredBy
   */
  export type Course$requiredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    cursor?: PrerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Course.publishedCourses
   */
  export type Course$publishedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
    where?: PublishedCourseWhereInput
    orderBy?: PublishedCourseOrderByWithRelationInput | PublishedCourseOrderByWithRelationInput[]
    cursor?: PublishedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublishedCourseScalarFieldEnum | PublishedCourseScalarFieldEnum[]
  }

  /**
   * Course.pendingBy
   */
  export type Course$pendingByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    where?: PendingCourseWhereInput
    orderBy?: PendingCourseOrderByWithRelationInput | PendingCourseOrderByWithRelationInput[]
    cursor?: PendingCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingCourseScalarFieldEnum | PendingCourseScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    year: number | null
    userId: number | null
    availableSeats: number | null
    studentEnrolled: number | null
    isValidated: number | null
  }

  export type ClassSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    year: number | null
    userId: number | null
    availableSeats: number | null
    studentEnrolled: number | null
    isValidated: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    semester: string | null
    year: number | null
    userId: number | null
    availableSeats: number | null
    studentEnrolled: number | null
    isValidated: number | null
    time: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    semester: string | null
    year: number | null
    userId: number | null
    availableSeats: number | null
    studentEnrolled: number | null
    isValidated: number | null
    time: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    courseId: number
    semester: number
    year: number
    userId: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    id?: true
    courseId?: true
    year?: true
    userId?: true
    availableSeats?: true
    studentEnrolled?: true
    isValidated?: true
  }

  export type ClassSumAggregateInputType = {
    id?: true
    courseId?: true
    year?: true
    userId?: true
    availableSeats?: true
    studentEnrolled?: true
    isValidated?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
    userId?: true
    availableSeats?: true
    studentEnrolled?: true
    isValidated?: true
    time?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
    userId?: true
    availableSeats?: true
    studentEnrolled?: true
    isValidated?: true
    time?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
    userId?: true
    availableSeats?: true
    studentEnrolled?: true
    isValidated?: true
    time?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: number
    courseId: number
    semester: string
    year: number
    userId: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    userId?: boolean
    availableSeats?: boolean
    studentEnrolled?: boolean
    isValidated?: boolean
    time?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    completedBy?: boolean | Class$completedByArgs<ExtArgs>
    inProgressBy?: boolean | Class$inProgressByArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    userId?: boolean
    availableSeats?: boolean
    studentEnrolled?: boolean
    isValidated?: boolean
    time?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    userId?: boolean
    availableSeats?: boolean
    studentEnrolled?: boolean
    isValidated?: boolean
    time?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    userId?: boolean
    availableSeats?: boolean
    studentEnrolled?: boolean
    isValidated?: boolean
    time?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "semester" | "year" | "userId" | "availableSeats" | "studentEnrolled" | "isValidated" | "time", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    completedBy?: boolean | Class$completedByArgs<ExtArgs>
    inProgressBy?: boolean | Class$inProgressByArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      instructor: Prisma.$UserPayload<ExtArgs>
      completedBy: Prisma.$CompletedCoursePayload<ExtArgs>[]
      inProgressBy: Prisma.$InProgressCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      semester: string
      year: number
      userId: number
      availableSeats: number
      studentEnrolled: number
      isValidated: number
      time: string
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completedBy<T extends Class$completedByArgs<ExtArgs> = {}>(args?: Subset<T, Class$completedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inProgressBy<T extends Class$inProgressByArgs<ExtArgs> = {}>(args?: Subset<T, Class$inProgressByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'Int'>
    readonly courseId: FieldRef<"Class", 'Int'>
    readonly semester: FieldRef<"Class", 'String'>
    readonly year: FieldRef<"Class", 'Int'>
    readonly userId: FieldRef<"Class", 'Int'>
    readonly availableSeats: FieldRef<"Class", 'Int'>
    readonly studentEnrolled: FieldRef<"Class", 'Int'>
    readonly isValidated: FieldRef<"Class", 'Int'>
    readonly time: FieldRef<"Class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.completedBy
   */
  export type Class$completedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    cursor?: CompletedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * Class.inProgressBy
   */
  export type Class$inProgressByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    where?: InProgressCourseWhereInput
    orderBy?: InProgressCourseOrderByWithRelationInput | InProgressCourseOrderByWithRelationInput[]
    cursor?: InProgressCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InProgressCourseScalarFieldEnum | InProgressCourseScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Prerequisite
   */

  export type AggregatePrerequisite = {
    _count: PrerequisiteCountAggregateOutputType | null
    _avg: PrerequisiteAvgAggregateOutputType | null
    _sum: PrerequisiteSumAggregateOutputType | null
    _min: PrerequisiteMinAggregateOutputType | null
    _max: PrerequisiteMaxAggregateOutputType | null
  }

  export type PrerequisiteAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    prerequisiteCourseId: number | null
  }

  export type PrerequisiteSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    prerequisiteCourseId: number | null
  }

  export type PrerequisiteMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    prerequisiteCourseId: number | null
  }

  export type PrerequisiteMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    prerequisiteCourseId: number | null
  }

  export type PrerequisiteCountAggregateOutputType = {
    id: number
    courseId: number
    prerequisiteCourseId: number
    _all: number
  }


  export type PrerequisiteAvgAggregateInputType = {
    id?: true
    courseId?: true
    prerequisiteCourseId?: true
  }

  export type PrerequisiteSumAggregateInputType = {
    id?: true
    courseId?: true
    prerequisiteCourseId?: true
  }

  export type PrerequisiteMinAggregateInputType = {
    id?: true
    courseId?: true
    prerequisiteCourseId?: true
  }

  export type PrerequisiteMaxAggregateInputType = {
    id?: true
    courseId?: true
    prerequisiteCourseId?: true
  }

  export type PrerequisiteCountAggregateInputType = {
    id?: true
    courseId?: true
    prerequisiteCourseId?: true
    _all?: true
  }

  export type PrerequisiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prerequisite to aggregate.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prerequisites
    **/
    _count?: true | PrerequisiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrerequisiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrerequisiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrerequisiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrerequisiteMaxAggregateInputType
  }

  export type GetPrerequisiteAggregateType<T extends PrerequisiteAggregateArgs> = {
        [P in keyof T & keyof AggregatePrerequisite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrerequisite[P]>
      : GetScalarType<T[P], AggregatePrerequisite[P]>
  }




  export type PrerequisiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithAggregationInput | PrerequisiteOrderByWithAggregationInput[]
    by: PrerequisiteScalarFieldEnum[] | PrerequisiteScalarFieldEnum
    having?: PrerequisiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrerequisiteCountAggregateInputType | true
    _avg?: PrerequisiteAvgAggregateInputType
    _sum?: PrerequisiteSumAggregateInputType
    _min?: PrerequisiteMinAggregateInputType
    _max?: PrerequisiteMaxAggregateInputType
  }

  export type PrerequisiteGroupByOutputType = {
    id: number
    courseId: number
    prerequisiteCourseId: number
    _count: PrerequisiteCountAggregateOutputType | null
    _avg: PrerequisiteAvgAggregateOutputType | null
    _sum: PrerequisiteSumAggregateOutputType | null
    _min: PrerequisiteMinAggregateOutputType | null
    _max: PrerequisiteMaxAggregateOutputType | null
  }

  type GetPrerequisiteGroupByPayload<T extends PrerequisiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrerequisiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrerequisiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrerequisiteGroupByOutputType[P]>
            : GetScalarType<T[P], PrerequisiteGroupByOutputType[P]>
        }
      >
    >


  export type PrerequisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    prerequisiteCourseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisiteCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    prerequisiteCourseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisiteCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    prerequisiteCourseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisiteCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectScalar = {
    id?: boolean
    courseId?: boolean
    prerequisiteCourseId?: boolean
  }

  export type PrerequisiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "prerequisiteCourseId", ExtArgs["result"]["prerequisite"]>
  export type PrerequisiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisiteCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PrerequisiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisiteCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PrerequisiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisiteCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $PrerequisitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prerequisite"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      prerequisiteCourse: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      prerequisiteCourseId: number
    }, ExtArgs["result"]["prerequisite"]>
    composites: {}
  }

  type PrerequisiteGetPayload<S extends boolean | null | undefined | PrerequisiteDefaultArgs> = $Result.GetResult<Prisma.$PrerequisitePayload, S>

  type PrerequisiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrerequisiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrerequisiteCountAggregateInputType | true
    }

  export interface PrerequisiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prerequisite'], meta: { name: 'Prerequisite' } }
    /**
     * Find zero or one Prerequisite that matches the filter.
     * @param {PrerequisiteFindUniqueArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrerequisiteFindUniqueArgs>(args: SelectSubset<T, PrerequisiteFindUniqueArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prerequisite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrerequisiteFindUniqueOrThrowArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrerequisiteFindUniqueOrThrowArgs>(args: SelectSubset<T, PrerequisiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prerequisite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindFirstArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrerequisiteFindFirstArgs>(args?: SelectSubset<T, PrerequisiteFindFirstArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prerequisite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindFirstOrThrowArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrerequisiteFindFirstOrThrowArgs>(args?: SelectSubset<T, PrerequisiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prerequisites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prerequisites
     * const prerequisites = await prisma.prerequisite.findMany()
     * 
     * // Get first 10 Prerequisites
     * const prerequisites = await prisma.prerequisite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrerequisiteFindManyArgs>(args?: SelectSubset<T, PrerequisiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prerequisite.
     * @param {PrerequisiteCreateArgs} args - Arguments to create a Prerequisite.
     * @example
     * // Create one Prerequisite
     * const Prerequisite = await prisma.prerequisite.create({
     *   data: {
     *     // ... data to create a Prerequisite
     *   }
     * })
     * 
     */
    create<T extends PrerequisiteCreateArgs>(args: SelectSubset<T, PrerequisiteCreateArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prerequisites.
     * @param {PrerequisiteCreateManyArgs} args - Arguments to create many Prerequisites.
     * @example
     * // Create many Prerequisites
     * const prerequisite = await prisma.prerequisite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrerequisiteCreateManyArgs>(args?: SelectSubset<T, PrerequisiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prerequisites and returns the data saved in the database.
     * @param {PrerequisiteCreateManyAndReturnArgs} args - Arguments to create many Prerequisites.
     * @example
     * // Create many Prerequisites
     * const prerequisite = await prisma.prerequisite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prerequisites and only return the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrerequisiteCreateManyAndReturnArgs>(args?: SelectSubset<T, PrerequisiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prerequisite.
     * @param {PrerequisiteDeleteArgs} args - Arguments to delete one Prerequisite.
     * @example
     * // Delete one Prerequisite
     * const Prerequisite = await prisma.prerequisite.delete({
     *   where: {
     *     // ... filter to delete one Prerequisite
     *   }
     * })
     * 
     */
    delete<T extends PrerequisiteDeleteArgs>(args: SelectSubset<T, PrerequisiteDeleteArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prerequisite.
     * @param {PrerequisiteUpdateArgs} args - Arguments to update one Prerequisite.
     * @example
     * // Update one Prerequisite
     * const prerequisite = await prisma.prerequisite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrerequisiteUpdateArgs>(args: SelectSubset<T, PrerequisiteUpdateArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prerequisites.
     * @param {PrerequisiteDeleteManyArgs} args - Arguments to filter Prerequisites to delete.
     * @example
     * // Delete a few Prerequisites
     * const { count } = await prisma.prerequisite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrerequisiteDeleteManyArgs>(args?: SelectSubset<T, PrerequisiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prerequisites
     * const prerequisite = await prisma.prerequisite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrerequisiteUpdateManyArgs>(args: SelectSubset<T, PrerequisiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prerequisites and returns the data updated in the database.
     * @param {PrerequisiteUpdateManyAndReturnArgs} args - Arguments to update many Prerequisites.
     * @example
     * // Update many Prerequisites
     * const prerequisite = await prisma.prerequisite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prerequisites and only return the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrerequisiteUpdateManyAndReturnArgs>(args: SelectSubset<T, PrerequisiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prerequisite.
     * @param {PrerequisiteUpsertArgs} args - Arguments to update or create a Prerequisite.
     * @example
     * // Update or create a Prerequisite
     * const prerequisite = await prisma.prerequisite.upsert({
     *   create: {
     *     // ... data to create a Prerequisite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prerequisite we want to update
     *   }
     * })
     */
    upsert<T extends PrerequisiteUpsertArgs>(args: SelectSubset<T, PrerequisiteUpsertArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteCountArgs} args - Arguments to filter Prerequisites to count.
     * @example
     * // Count the number of Prerequisites
     * const count = await prisma.prerequisite.count({
     *   where: {
     *     // ... the filter for the Prerequisites we want to count
     *   }
     * })
    **/
    count<T extends PrerequisiteCountArgs>(
      args?: Subset<T, PrerequisiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrerequisiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrerequisiteAggregateArgs>(args: Subset<T, PrerequisiteAggregateArgs>): Prisma.PrismaPromise<GetPrerequisiteAggregateType<T>>

    /**
     * Group by Prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrerequisiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrerequisiteGroupByArgs['orderBy'] }
        : { orderBy?: PrerequisiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrerequisiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrerequisiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prerequisite model
   */
  readonly fields: PrerequisiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prerequisite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrerequisiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prerequisiteCourse<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prerequisite model
   */
  interface PrerequisiteFieldRefs {
    readonly id: FieldRef<"Prerequisite", 'Int'>
    readonly courseId: FieldRef<"Prerequisite", 'Int'>
    readonly prerequisiteCourseId: FieldRef<"Prerequisite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Prerequisite findUnique
   */
  export type PrerequisiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite findUniqueOrThrow
   */
  export type PrerequisiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite findFirst
   */
  export type PrerequisiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite findFirstOrThrow
   */
  export type PrerequisiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite findMany
   */
  export type PrerequisiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisites to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite create
   */
  export type PrerequisiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Prerequisite.
     */
    data: XOR<PrerequisiteCreateInput, PrerequisiteUncheckedCreateInput>
  }

  /**
   * Prerequisite createMany
   */
  export type PrerequisiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prerequisites.
     */
    data: PrerequisiteCreateManyInput | PrerequisiteCreateManyInput[]
  }

  /**
   * Prerequisite createManyAndReturn
   */
  export type PrerequisiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * The data used to create many Prerequisites.
     */
    data: PrerequisiteCreateManyInput | PrerequisiteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prerequisite update
   */
  export type PrerequisiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Prerequisite.
     */
    data: XOR<PrerequisiteUpdateInput, PrerequisiteUncheckedUpdateInput>
    /**
     * Choose, which Prerequisite to update.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite updateMany
   */
  export type PrerequisiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prerequisites.
     */
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Prerequisites to update
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to update.
     */
    limit?: number
  }

  /**
   * Prerequisite updateManyAndReturn
   */
  export type PrerequisiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * The data used to update Prerequisites.
     */
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Prerequisites to update
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prerequisite upsert
   */
  export type PrerequisiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Prerequisite to update in case it exists.
     */
    where: PrerequisiteWhereUniqueInput
    /**
     * In case the Prerequisite found by the `where` argument doesn't exist, create a new Prerequisite with this data.
     */
    create: XOR<PrerequisiteCreateInput, PrerequisiteUncheckedCreateInput>
    /**
     * In case the Prerequisite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrerequisiteUpdateInput, PrerequisiteUncheckedUpdateInput>
  }

  /**
   * Prerequisite delete
   */
  export type PrerequisiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter which Prerequisite to delete.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite deleteMany
   */
  export type PrerequisiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prerequisites to delete
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to delete.
     */
    limit?: number
  }

  /**
   * Prerequisite without action
   */
  export type PrerequisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
  }


  /**
   * Model CompletedCourse
   */

  export type AggregateCompletedCourse = {
    _count: CompletedCourseCountAggregateOutputType | null
    _avg: CompletedCourseAvgAggregateOutputType | null
    _sum: CompletedCourseSumAggregateOutputType | null
    _min: CompletedCourseMinAggregateOutputType | null
    _max: CompletedCourseMaxAggregateOutputType | null
  }

  export type CompletedCourseAvgAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
  }

  export type CompletedCourseSumAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
  }

  export type CompletedCourseMinAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
    grade: string | null
  }

  export type CompletedCourseMaxAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
    grade: string | null
  }

  export type CompletedCourseCountAggregateOutputType = {
    id: number
    classId: number
    userId: number
    grade: number
    _all: number
  }


  export type CompletedCourseAvgAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
  }

  export type CompletedCourseSumAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
  }

  export type CompletedCourseMinAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
    grade?: true
  }

  export type CompletedCourseMaxAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
    grade?: true
  }

  export type CompletedCourseCountAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
    grade?: true
    _all?: true
  }

  export type CompletedCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedCourse to aggregate.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedCourses
    **/
    _count?: true | CompletedCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedCourseMaxAggregateInputType
  }

  export type GetCompletedCourseAggregateType<T extends CompletedCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedCourse[P]>
      : GetScalarType<T[P], AggregateCompletedCourse[P]>
  }




  export type CompletedCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithAggregationInput | CompletedCourseOrderByWithAggregationInput[]
    by: CompletedCourseScalarFieldEnum[] | CompletedCourseScalarFieldEnum
    having?: CompletedCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedCourseCountAggregateInputType | true
    _avg?: CompletedCourseAvgAggregateInputType
    _sum?: CompletedCourseSumAggregateInputType
    _min?: CompletedCourseMinAggregateInputType
    _max?: CompletedCourseMaxAggregateInputType
  }

  export type CompletedCourseGroupByOutputType = {
    id: number
    classId: number
    userId: number
    grade: string | null
    _count: CompletedCourseCountAggregateOutputType | null
    _avg: CompletedCourseAvgAggregateOutputType | null
    _sum: CompletedCourseSumAggregateOutputType | null
    _min: CompletedCourseMinAggregateOutputType | null
    _max: CompletedCourseMaxAggregateOutputType | null
  }

  type GetCompletedCourseGroupByPayload<T extends CompletedCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedCourseGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedCourseGroupByOutputType[P]>
        }
      >
    >


  export type CompletedCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    userId?: boolean
    grade?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    userId?: boolean
    grade?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    userId?: boolean
    grade?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectScalar = {
    id?: boolean
    classId?: boolean
    userId?: boolean
    grade?: boolean
  }

  export type CompletedCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "userId" | "grade", ExtArgs["result"]["completedCourse"]>
  export type CompletedCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompletedCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompletedCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompletedCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedCourse"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classId: number
      userId: number
      grade: string | null
    }, ExtArgs["result"]["completedCourse"]>
    composites: {}
  }

  type CompletedCourseGetPayload<S extends boolean | null | undefined | CompletedCourseDefaultArgs> = $Result.GetResult<Prisma.$CompletedCoursePayload, S>

  type CompletedCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedCourseCountAggregateInputType | true
    }

  export interface CompletedCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedCourse'], meta: { name: 'CompletedCourse' } }
    /**
     * Find zero or one CompletedCourse that matches the filter.
     * @param {CompletedCourseFindUniqueArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedCourseFindUniqueArgs>(args: SelectSubset<T, CompletedCourseFindUniqueArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedCourseFindUniqueOrThrowArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindFirstArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedCourseFindFirstArgs>(args?: SelectSubset<T, CompletedCourseFindFirstArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindFirstOrThrowArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedCourses
     * const completedCourses = await prisma.completedCourse.findMany()
     * 
     * // Get first 10 CompletedCourses
     * const completedCourses = await prisma.completedCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedCourseFindManyArgs>(args?: SelectSubset<T, CompletedCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedCourse.
     * @param {CompletedCourseCreateArgs} args - Arguments to create a CompletedCourse.
     * @example
     * // Create one CompletedCourse
     * const CompletedCourse = await prisma.completedCourse.create({
     *   data: {
     *     // ... data to create a CompletedCourse
     *   }
     * })
     * 
     */
    create<T extends CompletedCourseCreateArgs>(args: SelectSubset<T, CompletedCourseCreateArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedCourses.
     * @param {CompletedCourseCreateManyArgs} args - Arguments to create many CompletedCourses.
     * @example
     * // Create many CompletedCourses
     * const completedCourse = await prisma.completedCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedCourseCreateManyArgs>(args?: SelectSubset<T, CompletedCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedCourses and returns the data saved in the database.
     * @param {CompletedCourseCreateManyAndReturnArgs} args - Arguments to create many CompletedCourses.
     * @example
     * // Create many CompletedCourses
     * const completedCourse = await prisma.completedCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedCourses and only return the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompletedCourse.
     * @param {CompletedCourseDeleteArgs} args - Arguments to delete one CompletedCourse.
     * @example
     * // Delete one CompletedCourse
     * const CompletedCourse = await prisma.completedCourse.delete({
     *   where: {
     *     // ... filter to delete one CompletedCourse
     *   }
     * })
     * 
     */
    delete<T extends CompletedCourseDeleteArgs>(args: SelectSubset<T, CompletedCourseDeleteArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedCourse.
     * @param {CompletedCourseUpdateArgs} args - Arguments to update one CompletedCourse.
     * @example
     * // Update one CompletedCourse
     * const completedCourse = await prisma.completedCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedCourseUpdateArgs>(args: SelectSubset<T, CompletedCourseUpdateArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedCourses.
     * @param {CompletedCourseDeleteManyArgs} args - Arguments to filter CompletedCourses to delete.
     * @example
     * // Delete a few CompletedCourses
     * const { count } = await prisma.completedCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedCourseDeleteManyArgs>(args?: SelectSubset<T, CompletedCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedCourses
     * const completedCourse = await prisma.completedCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedCourseUpdateManyArgs>(args: SelectSubset<T, CompletedCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedCourses and returns the data updated in the database.
     * @param {CompletedCourseUpdateManyAndReturnArgs} args - Arguments to update many CompletedCourses.
     * @example
     * // Update many CompletedCourses
     * const completedCourse = await prisma.completedCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompletedCourses and only return the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompletedCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompletedCourse.
     * @param {CompletedCourseUpsertArgs} args - Arguments to update or create a CompletedCourse.
     * @example
     * // Update or create a CompletedCourse
     * const completedCourse = await prisma.completedCourse.upsert({
     *   create: {
     *     // ... data to create a CompletedCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedCourse we want to update
     *   }
     * })
     */
    upsert<T extends CompletedCourseUpsertArgs>(args: SelectSubset<T, CompletedCourseUpsertArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseCountArgs} args - Arguments to filter CompletedCourses to count.
     * @example
     * // Count the number of CompletedCourses
     * const count = await prisma.completedCourse.count({
     *   where: {
     *     // ... the filter for the CompletedCourses we want to count
     *   }
     * })
    **/
    count<T extends CompletedCourseCountArgs>(
      args?: Subset<T, CompletedCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletedCourseAggregateArgs>(args: Subset<T, CompletedCourseAggregateArgs>): Prisma.PrismaPromise<GetCompletedCourseAggregateType<T>>

    /**
     * Group by CompletedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletedCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedCourseGroupByArgs['orderBy'] }
        : { orderBy?: CompletedCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletedCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedCourse model
   */
  readonly fields: CompletedCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompletedCourse model
   */
  interface CompletedCourseFieldRefs {
    readonly id: FieldRef<"CompletedCourse", 'Int'>
    readonly classId: FieldRef<"CompletedCourse", 'Int'>
    readonly userId: FieldRef<"CompletedCourse", 'Int'>
    readonly grade: FieldRef<"CompletedCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompletedCourse findUnique
   */
  export type CompletedCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse findUniqueOrThrow
   */
  export type CompletedCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse findFirst
   */
  export type CompletedCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedCourses.
     */
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse findFirstOrThrow
   */
  export type CompletedCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedCourses.
     */
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse findMany
   */
  export type CompletedCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourses to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse create
   */
  export type CompletedCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedCourse.
     */
    data: XOR<CompletedCourseCreateInput, CompletedCourseUncheckedCreateInput>
  }

  /**
   * CompletedCourse createMany
   */
  export type CompletedCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedCourses.
     */
    data: CompletedCourseCreateManyInput | CompletedCourseCreateManyInput[]
  }

  /**
   * CompletedCourse createManyAndReturn
   */
  export type CompletedCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * The data used to create many CompletedCourses.
     */
    data: CompletedCourseCreateManyInput | CompletedCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedCourse update
   */
  export type CompletedCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedCourse.
     */
    data: XOR<CompletedCourseUpdateInput, CompletedCourseUncheckedUpdateInput>
    /**
     * Choose, which CompletedCourse to update.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse updateMany
   */
  export type CompletedCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedCourses.
     */
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedCourses to update
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to update.
     */
    limit?: number
  }

  /**
   * CompletedCourse updateManyAndReturn
   */
  export type CompletedCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * The data used to update CompletedCourses.
     */
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedCourses to update
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedCourse upsert
   */
  export type CompletedCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedCourse to update in case it exists.
     */
    where: CompletedCourseWhereUniqueInput
    /**
     * In case the CompletedCourse found by the `where` argument doesn't exist, create a new CompletedCourse with this data.
     */
    create: XOR<CompletedCourseCreateInput, CompletedCourseUncheckedCreateInput>
    /**
     * In case the CompletedCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedCourseUpdateInput, CompletedCourseUncheckedUpdateInput>
  }

  /**
   * CompletedCourse delete
   */
  export type CompletedCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter which CompletedCourse to delete.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse deleteMany
   */
  export type CompletedCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedCourses to delete
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to delete.
     */
    limit?: number
  }

  /**
   * CompletedCourse without action
   */
  export type CompletedCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
  }


  /**
   * Model InProgressCourse
   */

  export type AggregateInProgressCourse = {
    _count: InProgressCourseCountAggregateOutputType | null
    _avg: InProgressCourseAvgAggregateOutputType | null
    _sum: InProgressCourseSumAggregateOutputType | null
    _min: InProgressCourseMinAggregateOutputType | null
    _max: InProgressCourseMaxAggregateOutputType | null
  }

  export type InProgressCourseAvgAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
  }

  export type InProgressCourseSumAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
  }

  export type InProgressCourseMinAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
    grade: string | null
  }

  export type InProgressCourseMaxAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
    grade: string | null
  }

  export type InProgressCourseCountAggregateOutputType = {
    id: number
    classId: number
    userId: number
    grade: number
    _all: number
  }


  export type InProgressCourseAvgAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
  }

  export type InProgressCourseSumAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
  }

  export type InProgressCourseMinAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
    grade?: true
  }

  export type InProgressCourseMaxAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
    grade?: true
  }

  export type InProgressCourseCountAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
    grade?: true
    _all?: true
  }

  export type InProgressCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InProgressCourse to aggregate.
     */
    where?: InProgressCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InProgressCourses to fetch.
     */
    orderBy?: InProgressCourseOrderByWithRelationInput | InProgressCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InProgressCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InProgressCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InProgressCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InProgressCourses
    **/
    _count?: true | InProgressCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InProgressCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InProgressCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InProgressCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InProgressCourseMaxAggregateInputType
  }

  export type GetInProgressCourseAggregateType<T extends InProgressCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateInProgressCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInProgressCourse[P]>
      : GetScalarType<T[P], AggregateInProgressCourse[P]>
  }




  export type InProgressCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InProgressCourseWhereInput
    orderBy?: InProgressCourseOrderByWithAggregationInput | InProgressCourseOrderByWithAggregationInput[]
    by: InProgressCourseScalarFieldEnum[] | InProgressCourseScalarFieldEnum
    having?: InProgressCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InProgressCourseCountAggregateInputType | true
    _avg?: InProgressCourseAvgAggregateInputType
    _sum?: InProgressCourseSumAggregateInputType
    _min?: InProgressCourseMinAggregateInputType
    _max?: InProgressCourseMaxAggregateInputType
  }

  export type InProgressCourseGroupByOutputType = {
    id: number
    classId: number
    userId: number
    grade: string | null
    _count: InProgressCourseCountAggregateOutputType | null
    _avg: InProgressCourseAvgAggregateOutputType | null
    _sum: InProgressCourseSumAggregateOutputType | null
    _min: InProgressCourseMinAggregateOutputType | null
    _max: InProgressCourseMaxAggregateOutputType | null
  }

  type GetInProgressCourseGroupByPayload<T extends InProgressCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InProgressCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InProgressCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InProgressCourseGroupByOutputType[P]>
            : GetScalarType<T[P], InProgressCourseGroupByOutputType[P]>
        }
      >
    >


  export type InProgressCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    userId?: boolean
    grade?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inProgressCourse"]>

  export type InProgressCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    userId?: boolean
    grade?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inProgressCourse"]>

  export type InProgressCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    userId?: boolean
    grade?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inProgressCourse"]>

  export type InProgressCourseSelectScalar = {
    id?: boolean
    classId?: boolean
    userId?: boolean
    grade?: boolean
  }

  export type InProgressCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "userId" | "grade", ExtArgs["result"]["inProgressCourse"]>
  export type InProgressCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InProgressCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InProgressCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InProgressCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InProgressCourse"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classId: number
      userId: number
      grade: string | null
    }, ExtArgs["result"]["inProgressCourse"]>
    composites: {}
  }

  type InProgressCourseGetPayload<S extends boolean | null | undefined | InProgressCourseDefaultArgs> = $Result.GetResult<Prisma.$InProgressCoursePayload, S>

  type InProgressCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InProgressCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InProgressCourseCountAggregateInputType | true
    }

  export interface InProgressCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InProgressCourse'], meta: { name: 'InProgressCourse' } }
    /**
     * Find zero or one InProgressCourse that matches the filter.
     * @param {InProgressCourseFindUniqueArgs} args - Arguments to find a InProgressCourse
     * @example
     * // Get one InProgressCourse
     * const inProgressCourse = await prisma.inProgressCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InProgressCourseFindUniqueArgs>(args: SelectSubset<T, InProgressCourseFindUniqueArgs<ExtArgs>>): Prisma__InProgressCourseClient<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InProgressCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InProgressCourseFindUniqueOrThrowArgs} args - Arguments to find a InProgressCourse
     * @example
     * // Get one InProgressCourse
     * const inProgressCourse = await prisma.inProgressCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InProgressCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, InProgressCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InProgressCourseClient<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InProgressCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressCourseFindFirstArgs} args - Arguments to find a InProgressCourse
     * @example
     * // Get one InProgressCourse
     * const inProgressCourse = await prisma.inProgressCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InProgressCourseFindFirstArgs>(args?: SelectSubset<T, InProgressCourseFindFirstArgs<ExtArgs>>): Prisma__InProgressCourseClient<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InProgressCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressCourseFindFirstOrThrowArgs} args - Arguments to find a InProgressCourse
     * @example
     * // Get one InProgressCourse
     * const inProgressCourse = await prisma.inProgressCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InProgressCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, InProgressCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__InProgressCourseClient<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InProgressCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InProgressCourses
     * const inProgressCourses = await prisma.inProgressCourse.findMany()
     * 
     * // Get first 10 InProgressCourses
     * const inProgressCourses = await prisma.inProgressCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inProgressCourseWithIdOnly = await prisma.inProgressCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InProgressCourseFindManyArgs>(args?: SelectSubset<T, InProgressCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InProgressCourse.
     * @param {InProgressCourseCreateArgs} args - Arguments to create a InProgressCourse.
     * @example
     * // Create one InProgressCourse
     * const InProgressCourse = await prisma.inProgressCourse.create({
     *   data: {
     *     // ... data to create a InProgressCourse
     *   }
     * })
     * 
     */
    create<T extends InProgressCourseCreateArgs>(args: SelectSubset<T, InProgressCourseCreateArgs<ExtArgs>>): Prisma__InProgressCourseClient<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InProgressCourses.
     * @param {InProgressCourseCreateManyArgs} args - Arguments to create many InProgressCourses.
     * @example
     * // Create many InProgressCourses
     * const inProgressCourse = await prisma.inProgressCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InProgressCourseCreateManyArgs>(args?: SelectSubset<T, InProgressCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InProgressCourses and returns the data saved in the database.
     * @param {InProgressCourseCreateManyAndReturnArgs} args - Arguments to create many InProgressCourses.
     * @example
     * // Create many InProgressCourses
     * const inProgressCourse = await prisma.inProgressCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InProgressCourses and only return the `id`
     * const inProgressCourseWithIdOnly = await prisma.inProgressCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InProgressCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, InProgressCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InProgressCourse.
     * @param {InProgressCourseDeleteArgs} args - Arguments to delete one InProgressCourse.
     * @example
     * // Delete one InProgressCourse
     * const InProgressCourse = await prisma.inProgressCourse.delete({
     *   where: {
     *     // ... filter to delete one InProgressCourse
     *   }
     * })
     * 
     */
    delete<T extends InProgressCourseDeleteArgs>(args: SelectSubset<T, InProgressCourseDeleteArgs<ExtArgs>>): Prisma__InProgressCourseClient<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InProgressCourse.
     * @param {InProgressCourseUpdateArgs} args - Arguments to update one InProgressCourse.
     * @example
     * // Update one InProgressCourse
     * const inProgressCourse = await prisma.inProgressCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InProgressCourseUpdateArgs>(args: SelectSubset<T, InProgressCourseUpdateArgs<ExtArgs>>): Prisma__InProgressCourseClient<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InProgressCourses.
     * @param {InProgressCourseDeleteManyArgs} args - Arguments to filter InProgressCourses to delete.
     * @example
     * // Delete a few InProgressCourses
     * const { count } = await prisma.inProgressCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InProgressCourseDeleteManyArgs>(args?: SelectSubset<T, InProgressCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InProgressCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InProgressCourses
     * const inProgressCourse = await prisma.inProgressCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InProgressCourseUpdateManyArgs>(args: SelectSubset<T, InProgressCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InProgressCourses and returns the data updated in the database.
     * @param {InProgressCourseUpdateManyAndReturnArgs} args - Arguments to update many InProgressCourses.
     * @example
     * // Update many InProgressCourses
     * const inProgressCourse = await prisma.inProgressCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InProgressCourses and only return the `id`
     * const inProgressCourseWithIdOnly = await prisma.inProgressCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InProgressCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, InProgressCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InProgressCourse.
     * @param {InProgressCourseUpsertArgs} args - Arguments to update or create a InProgressCourse.
     * @example
     * // Update or create a InProgressCourse
     * const inProgressCourse = await prisma.inProgressCourse.upsert({
     *   create: {
     *     // ... data to create a InProgressCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InProgressCourse we want to update
     *   }
     * })
     */
    upsert<T extends InProgressCourseUpsertArgs>(args: SelectSubset<T, InProgressCourseUpsertArgs<ExtArgs>>): Prisma__InProgressCourseClient<$Result.GetResult<Prisma.$InProgressCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InProgressCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressCourseCountArgs} args - Arguments to filter InProgressCourses to count.
     * @example
     * // Count the number of InProgressCourses
     * const count = await prisma.inProgressCourse.count({
     *   where: {
     *     // ... the filter for the InProgressCourses we want to count
     *   }
     * })
    **/
    count<T extends InProgressCourseCountArgs>(
      args?: Subset<T, InProgressCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InProgressCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InProgressCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InProgressCourseAggregateArgs>(args: Subset<T, InProgressCourseAggregateArgs>): Prisma.PrismaPromise<GetInProgressCourseAggregateType<T>>

    /**
     * Group by InProgressCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InProgressCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InProgressCourseGroupByArgs['orderBy'] }
        : { orderBy?: InProgressCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InProgressCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInProgressCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InProgressCourse model
   */
  readonly fields: InProgressCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InProgressCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InProgressCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InProgressCourse model
   */
  interface InProgressCourseFieldRefs {
    readonly id: FieldRef<"InProgressCourse", 'Int'>
    readonly classId: FieldRef<"InProgressCourse", 'Int'>
    readonly userId: FieldRef<"InProgressCourse", 'Int'>
    readonly grade: FieldRef<"InProgressCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InProgressCourse findUnique
   */
  export type InProgressCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    /**
     * Filter, which InProgressCourse to fetch.
     */
    where: InProgressCourseWhereUniqueInput
  }

  /**
   * InProgressCourse findUniqueOrThrow
   */
  export type InProgressCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    /**
     * Filter, which InProgressCourse to fetch.
     */
    where: InProgressCourseWhereUniqueInput
  }

  /**
   * InProgressCourse findFirst
   */
  export type InProgressCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    /**
     * Filter, which InProgressCourse to fetch.
     */
    where?: InProgressCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InProgressCourses to fetch.
     */
    orderBy?: InProgressCourseOrderByWithRelationInput | InProgressCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InProgressCourses.
     */
    cursor?: InProgressCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InProgressCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InProgressCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InProgressCourses.
     */
    distinct?: InProgressCourseScalarFieldEnum | InProgressCourseScalarFieldEnum[]
  }

  /**
   * InProgressCourse findFirstOrThrow
   */
  export type InProgressCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    /**
     * Filter, which InProgressCourse to fetch.
     */
    where?: InProgressCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InProgressCourses to fetch.
     */
    orderBy?: InProgressCourseOrderByWithRelationInput | InProgressCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InProgressCourses.
     */
    cursor?: InProgressCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InProgressCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InProgressCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InProgressCourses.
     */
    distinct?: InProgressCourseScalarFieldEnum | InProgressCourseScalarFieldEnum[]
  }

  /**
   * InProgressCourse findMany
   */
  export type InProgressCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    /**
     * Filter, which InProgressCourses to fetch.
     */
    where?: InProgressCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InProgressCourses to fetch.
     */
    orderBy?: InProgressCourseOrderByWithRelationInput | InProgressCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InProgressCourses.
     */
    cursor?: InProgressCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InProgressCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InProgressCourses.
     */
    skip?: number
    distinct?: InProgressCourseScalarFieldEnum | InProgressCourseScalarFieldEnum[]
  }

  /**
   * InProgressCourse create
   */
  export type InProgressCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a InProgressCourse.
     */
    data: XOR<InProgressCourseCreateInput, InProgressCourseUncheckedCreateInput>
  }

  /**
   * InProgressCourse createMany
   */
  export type InProgressCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InProgressCourses.
     */
    data: InProgressCourseCreateManyInput | InProgressCourseCreateManyInput[]
  }

  /**
   * InProgressCourse createManyAndReturn
   */
  export type InProgressCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * The data used to create many InProgressCourses.
     */
    data: InProgressCourseCreateManyInput | InProgressCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InProgressCourse update
   */
  export type InProgressCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a InProgressCourse.
     */
    data: XOR<InProgressCourseUpdateInput, InProgressCourseUncheckedUpdateInput>
    /**
     * Choose, which InProgressCourse to update.
     */
    where: InProgressCourseWhereUniqueInput
  }

  /**
   * InProgressCourse updateMany
   */
  export type InProgressCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InProgressCourses.
     */
    data: XOR<InProgressCourseUpdateManyMutationInput, InProgressCourseUncheckedUpdateManyInput>
    /**
     * Filter which InProgressCourses to update
     */
    where?: InProgressCourseWhereInput
    /**
     * Limit how many InProgressCourses to update.
     */
    limit?: number
  }

  /**
   * InProgressCourse updateManyAndReturn
   */
  export type InProgressCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * The data used to update InProgressCourses.
     */
    data: XOR<InProgressCourseUpdateManyMutationInput, InProgressCourseUncheckedUpdateManyInput>
    /**
     * Filter which InProgressCourses to update
     */
    where?: InProgressCourseWhereInput
    /**
     * Limit how many InProgressCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InProgressCourse upsert
   */
  export type InProgressCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the InProgressCourse to update in case it exists.
     */
    where: InProgressCourseWhereUniqueInput
    /**
     * In case the InProgressCourse found by the `where` argument doesn't exist, create a new InProgressCourse with this data.
     */
    create: XOR<InProgressCourseCreateInput, InProgressCourseUncheckedCreateInput>
    /**
     * In case the InProgressCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InProgressCourseUpdateInput, InProgressCourseUncheckedUpdateInput>
  }

  /**
   * InProgressCourse delete
   */
  export type InProgressCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
    /**
     * Filter which InProgressCourse to delete.
     */
    where: InProgressCourseWhereUniqueInput
  }

  /**
   * InProgressCourse deleteMany
   */
  export type InProgressCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InProgressCourses to delete
     */
    where?: InProgressCourseWhereInput
    /**
     * Limit how many InProgressCourses to delete.
     */
    limit?: number
  }

  /**
   * InProgressCourse without action
   */
  export type InProgressCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgressCourse
     */
    select?: InProgressCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgressCourse
     */
    omit?: InProgressCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InProgressCourseInclude<ExtArgs> | null
  }


  /**
   * Model PendingCourse
   */

  export type AggregatePendingCourse = {
    _count: PendingCourseCountAggregateOutputType | null
    _avg: PendingCourseAvgAggregateOutputType | null
    _sum: PendingCourseSumAggregateOutputType | null
    _min: PendingCourseMinAggregateOutputType | null
    _max: PendingCourseMaxAggregateOutputType | null
  }

  export type PendingCourseAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    userId: number | null
  }

  export type PendingCourseSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    userId: number | null
  }

  export type PendingCourseMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    userId: number | null
  }

  export type PendingCourseMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    userId: number | null
  }

  export type PendingCourseCountAggregateOutputType = {
    id: number
    courseId: number
    userId: number
    _all: number
  }


  export type PendingCourseAvgAggregateInputType = {
    id?: true
    courseId?: true
    userId?: true
  }

  export type PendingCourseSumAggregateInputType = {
    id?: true
    courseId?: true
    userId?: true
  }

  export type PendingCourseMinAggregateInputType = {
    id?: true
    courseId?: true
    userId?: true
  }

  export type PendingCourseMaxAggregateInputType = {
    id?: true
    courseId?: true
    userId?: true
  }

  export type PendingCourseCountAggregateInputType = {
    id?: true
    courseId?: true
    userId?: true
    _all?: true
  }

  export type PendingCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingCourse to aggregate.
     */
    where?: PendingCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingCourses to fetch.
     */
    orderBy?: PendingCourseOrderByWithRelationInput | PendingCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingCourses
    **/
    _count?: true | PendingCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendingCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendingCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingCourseMaxAggregateInputType
  }

  export type GetPendingCourseAggregateType<T extends PendingCourseAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingCourse[P]>
      : GetScalarType<T[P], AggregatePendingCourse[P]>
  }




  export type PendingCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingCourseWhereInput
    orderBy?: PendingCourseOrderByWithAggregationInput | PendingCourseOrderByWithAggregationInput[]
    by: PendingCourseScalarFieldEnum[] | PendingCourseScalarFieldEnum
    having?: PendingCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingCourseCountAggregateInputType | true
    _avg?: PendingCourseAvgAggregateInputType
    _sum?: PendingCourseSumAggregateInputType
    _min?: PendingCourseMinAggregateInputType
    _max?: PendingCourseMaxAggregateInputType
  }

  export type PendingCourseGroupByOutputType = {
    id: number
    courseId: number
    userId: number
    _count: PendingCourseCountAggregateOutputType | null
    _avg: PendingCourseAvgAggregateOutputType | null
    _sum: PendingCourseSumAggregateOutputType | null
    _min: PendingCourseMinAggregateOutputType | null
    _max: PendingCourseMaxAggregateOutputType | null
  }

  type GetPendingCourseGroupByPayload<T extends PendingCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingCourseGroupByOutputType[P]>
            : GetScalarType<T[P], PendingCourseGroupByOutputType[P]>
        }
      >
    >


  export type PendingCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingCourse"]>

  export type PendingCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingCourse"]>

  export type PendingCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingCourse"]>

  export type PendingCourseSelectScalar = {
    id?: boolean
    courseId?: boolean
    userId?: boolean
  }

  export type PendingCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "userId", ExtArgs["result"]["pendingCourse"]>
  export type PendingCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PendingCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PendingCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PendingCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendingCourse"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      userId: number
    }, ExtArgs["result"]["pendingCourse"]>
    composites: {}
  }

  type PendingCourseGetPayload<S extends boolean | null | undefined | PendingCourseDefaultArgs> = $Result.GetResult<Prisma.$PendingCoursePayload, S>

  type PendingCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendingCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendingCourseCountAggregateInputType | true
    }

  export interface PendingCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingCourse'], meta: { name: 'PendingCourse' } }
    /**
     * Find zero or one PendingCourse that matches the filter.
     * @param {PendingCourseFindUniqueArgs} args - Arguments to find a PendingCourse
     * @example
     * // Get one PendingCourse
     * const pendingCourse = await prisma.pendingCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendingCourseFindUniqueArgs>(args: SelectSubset<T, PendingCourseFindUniqueArgs<ExtArgs>>): Prisma__PendingCourseClient<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PendingCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendingCourseFindUniqueOrThrowArgs} args - Arguments to find a PendingCourse
     * @example
     * // Get one PendingCourse
     * const pendingCourse = await prisma.pendingCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendingCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, PendingCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendingCourseClient<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendingCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCourseFindFirstArgs} args - Arguments to find a PendingCourse
     * @example
     * // Get one PendingCourse
     * const pendingCourse = await prisma.pendingCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendingCourseFindFirstArgs>(args?: SelectSubset<T, PendingCourseFindFirstArgs<ExtArgs>>): Prisma__PendingCourseClient<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendingCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCourseFindFirstOrThrowArgs} args - Arguments to find a PendingCourse
     * @example
     * // Get one PendingCourse
     * const pendingCourse = await prisma.pendingCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendingCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, PendingCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendingCourseClient<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PendingCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingCourses
     * const pendingCourses = await prisma.pendingCourse.findMany()
     * 
     * // Get first 10 PendingCourses
     * const pendingCourses = await prisma.pendingCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingCourseWithIdOnly = await prisma.pendingCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendingCourseFindManyArgs>(args?: SelectSubset<T, PendingCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PendingCourse.
     * @param {PendingCourseCreateArgs} args - Arguments to create a PendingCourse.
     * @example
     * // Create one PendingCourse
     * const PendingCourse = await prisma.pendingCourse.create({
     *   data: {
     *     // ... data to create a PendingCourse
     *   }
     * })
     * 
     */
    create<T extends PendingCourseCreateArgs>(args: SelectSubset<T, PendingCourseCreateArgs<ExtArgs>>): Prisma__PendingCourseClient<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PendingCourses.
     * @param {PendingCourseCreateManyArgs} args - Arguments to create many PendingCourses.
     * @example
     * // Create many PendingCourses
     * const pendingCourse = await prisma.pendingCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendingCourseCreateManyArgs>(args?: SelectSubset<T, PendingCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendingCourses and returns the data saved in the database.
     * @param {PendingCourseCreateManyAndReturnArgs} args - Arguments to create many PendingCourses.
     * @example
     * // Create many PendingCourses
     * const pendingCourse = await prisma.pendingCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendingCourses and only return the `id`
     * const pendingCourseWithIdOnly = await prisma.pendingCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendingCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, PendingCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PendingCourse.
     * @param {PendingCourseDeleteArgs} args - Arguments to delete one PendingCourse.
     * @example
     * // Delete one PendingCourse
     * const PendingCourse = await prisma.pendingCourse.delete({
     *   where: {
     *     // ... filter to delete one PendingCourse
     *   }
     * })
     * 
     */
    delete<T extends PendingCourseDeleteArgs>(args: SelectSubset<T, PendingCourseDeleteArgs<ExtArgs>>): Prisma__PendingCourseClient<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PendingCourse.
     * @param {PendingCourseUpdateArgs} args - Arguments to update one PendingCourse.
     * @example
     * // Update one PendingCourse
     * const pendingCourse = await prisma.pendingCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendingCourseUpdateArgs>(args: SelectSubset<T, PendingCourseUpdateArgs<ExtArgs>>): Prisma__PendingCourseClient<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PendingCourses.
     * @param {PendingCourseDeleteManyArgs} args - Arguments to filter PendingCourses to delete.
     * @example
     * // Delete a few PendingCourses
     * const { count } = await prisma.pendingCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendingCourseDeleteManyArgs>(args?: SelectSubset<T, PendingCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingCourses
     * const pendingCourse = await prisma.pendingCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendingCourseUpdateManyArgs>(args: SelectSubset<T, PendingCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingCourses and returns the data updated in the database.
     * @param {PendingCourseUpdateManyAndReturnArgs} args - Arguments to update many PendingCourses.
     * @example
     * // Update many PendingCourses
     * const pendingCourse = await prisma.pendingCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PendingCourses and only return the `id`
     * const pendingCourseWithIdOnly = await prisma.pendingCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PendingCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, PendingCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PendingCourse.
     * @param {PendingCourseUpsertArgs} args - Arguments to update or create a PendingCourse.
     * @example
     * // Update or create a PendingCourse
     * const pendingCourse = await prisma.pendingCourse.upsert({
     *   create: {
     *     // ... data to create a PendingCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingCourse we want to update
     *   }
     * })
     */
    upsert<T extends PendingCourseUpsertArgs>(args: SelectSubset<T, PendingCourseUpsertArgs<ExtArgs>>): Prisma__PendingCourseClient<$Result.GetResult<Prisma.$PendingCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PendingCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCourseCountArgs} args - Arguments to filter PendingCourses to count.
     * @example
     * // Count the number of PendingCourses
     * const count = await prisma.pendingCourse.count({
     *   where: {
     *     // ... the filter for the PendingCourses we want to count
     *   }
     * })
    **/
    count<T extends PendingCourseCountArgs>(
      args?: Subset<T, PendingCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PendingCourseAggregateArgs>(args: Subset<T, PendingCourseAggregateArgs>): Prisma.PrismaPromise<GetPendingCourseAggregateType<T>>

    /**
     * Group by PendingCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PendingCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingCourseGroupByArgs['orderBy'] }
        : { orderBy?: PendingCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PendingCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendingCourse model
   */
  readonly fields: PendingCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PendingCourse model
   */
  interface PendingCourseFieldRefs {
    readonly id: FieldRef<"PendingCourse", 'Int'>
    readonly courseId: FieldRef<"PendingCourse", 'Int'>
    readonly userId: FieldRef<"PendingCourse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PendingCourse findUnique
   */
  export type PendingCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    /**
     * Filter, which PendingCourse to fetch.
     */
    where: PendingCourseWhereUniqueInput
  }

  /**
   * PendingCourse findUniqueOrThrow
   */
  export type PendingCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    /**
     * Filter, which PendingCourse to fetch.
     */
    where: PendingCourseWhereUniqueInput
  }

  /**
   * PendingCourse findFirst
   */
  export type PendingCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    /**
     * Filter, which PendingCourse to fetch.
     */
    where?: PendingCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingCourses to fetch.
     */
    orderBy?: PendingCourseOrderByWithRelationInput | PendingCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingCourses.
     */
    cursor?: PendingCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingCourses.
     */
    distinct?: PendingCourseScalarFieldEnum | PendingCourseScalarFieldEnum[]
  }

  /**
   * PendingCourse findFirstOrThrow
   */
  export type PendingCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    /**
     * Filter, which PendingCourse to fetch.
     */
    where?: PendingCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingCourses to fetch.
     */
    orderBy?: PendingCourseOrderByWithRelationInput | PendingCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingCourses.
     */
    cursor?: PendingCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingCourses.
     */
    distinct?: PendingCourseScalarFieldEnum | PendingCourseScalarFieldEnum[]
  }

  /**
   * PendingCourse findMany
   */
  export type PendingCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    /**
     * Filter, which PendingCourses to fetch.
     */
    where?: PendingCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingCourses to fetch.
     */
    orderBy?: PendingCourseOrderByWithRelationInput | PendingCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingCourses.
     */
    cursor?: PendingCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingCourses.
     */
    skip?: number
    distinct?: PendingCourseScalarFieldEnum | PendingCourseScalarFieldEnum[]
  }

  /**
   * PendingCourse create
   */
  export type PendingCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a PendingCourse.
     */
    data: XOR<PendingCourseCreateInput, PendingCourseUncheckedCreateInput>
  }

  /**
   * PendingCourse createMany
   */
  export type PendingCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingCourses.
     */
    data: PendingCourseCreateManyInput | PendingCourseCreateManyInput[]
  }

  /**
   * PendingCourse createManyAndReturn
   */
  export type PendingCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * The data used to create many PendingCourses.
     */
    data: PendingCourseCreateManyInput | PendingCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendingCourse update
   */
  export type PendingCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a PendingCourse.
     */
    data: XOR<PendingCourseUpdateInput, PendingCourseUncheckedUpdateInput>
    /**
     * Choose, which PendingCourse to update.
     */
    where: PendingCourseWhereUniqueInput
  }

  /**
   * PendingCourse updateMany
   */
  export type PendingCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingCourses.
     */
    data: XOR<PendingCourseUpdateManyMutationInput, PendingCourseUncheckedUpdateManyInput>
    /**
     * Filter which PendingCourses to update
     */
    where?: PendingCourseWhereInput
    /**
     * Limit how many PendingCourses to update.
     */
    limit?: number
  }

  /**
   * PendingCourse updateManyAndReturn
   */
  export type PendingCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * The data used to update PendingCourses.
     */
    data: XOR<PendingCourseUpdateManyMutationInput, PendingCourseUncheckedUpdateManyInput>
    /**
     * Filter which PendingCourses to update
     */
    where?: PendingCourseWhereInput
    /**
     * Limit how many PendingCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendingCourse upsert
   */
  export type PendingCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the PendingCourse to update in case it exists.
     */
    where: PendingCourseWhereUniqueInput
    /**
     * In case the PendingCourse found by the `where` argument doesn't exist, create a new PendingCourse with this data.
     */
    create: XOR<PendingCourseCreateInput, PendingCourseUncheckedCreateInput>
    /**
     * In case the PendingCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingCourseUpdateInput, PendingCourseUncheckedUpdateInput>
  }

  /**
   * PendingCourse delete
   */
  export type PendingCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
    /**
     * Filter which PendingCourse to delete.
     */
    where: PendingCourseWhereUniqueInput
  }

  /**
   * PendingCourse deleteMany
   */
  export type PendingCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingCourses to delete
     */
    where?: PendingCourseWhereInput
    /**
     * Limit how many PendingCourses to delete.
     */
    limit?: number
  }

  /**
   * PendingCourse without action
   */
  export type PendingCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCourse
     */
    select?: PendingCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingCourse
     */
    omit?: PendingCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCourseInclude<ExtArgs> | null
  }


  /**
   * Model PublishedCourse
   */

  export type AggregatePublishedCourse = {
    _count: PublishedCourseCountAggregateOutputType | null
    _avg: PublishedCourseAvgAggregateOutputType | null
    _sum: PublishedCourseSumAggregateOutputType | null
    _min: PublishedCourseMinAggregateOutputType | null
    _max: PublishedCourseMaxAggregateOutputType | null
  }

  export type PublishedCourseAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    year: number | null
  }

  export type PublishedCourseSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    year: number | null
  }

  export type PublishedCourseMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    semester: string | null
    year: number | null
    deadline: Date | null
  }

  export type PublishedCourseMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    semester: string | null
    year: number | null
    deadline: Date | null
  }

  export type PublishedCourseCountAggregateOutputType = {
    id: number
    courseId: number
    semester: number
    year: number
    deadline: number
    _all: number
  }


  export type PublishedCourseAvgAggregateInputType = {
    id?: true
    courseId?: true
    year?: true
  }

  export type PublishedCourseSumAggregateInputType = {
    id?: true
    courseId?: true
    year?: true
  }

  export type PublishedCourseMinAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
    deadline?: true
  }

  export type PublishedCourseMaxAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
    deadline?: true
  }

  export type PublishedCourseCountAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
    deadline?: true
    _all?: true
  }

  export type PublishedCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublishedCourse to aggregate.
     */
    where?: PublishedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublishedCourses to fetch.
     */
    orderBy?: PublishedCourseOrderByWithRelationInput | PublishedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublishedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublishedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublishedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublishedCourses
    **/
    _count?: true | PublishedCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublishedCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublishedCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublishedCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublishedCourseMaxAggregateInputType
  }

  export type GetPublishedCourseAggregateType<T extends PublishedCourseAggregateArgs> = {
        [P in keyof T & keyof AggregatePublishedCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublishedCourse[P]>
      : GetScalarType<T[P], AggregatePublishedCourse[P]>
  }




  export type PublishedCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublishedCourseWhereInput
    orderBy?: PublishedCourseOrderByWithAggregationInput | PublishedCourseOrderByWithAggregationInput[]
    by: PublishedCourseScalarFieldEnum[] | PublishedCourseScalarFieldEnum
    having?: PublishedCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublishedCourseCountAggregateInputType | true
    _avg?: PublishedCourseAvgAggregateInputType
    _sum?: PublishedCourseSumAggregateInputType
    _min?: PublishedCourseMinAggregateInputType
    _max?: PublishedCourseMaxAggregateInputType
  }

  export type PublishedCourseGroupByOutputType = {
    id: number
    courseId: number
    semester: string
    year: number
    deadline: Date
    _count: PublishedCourseCountAggregateOutputType | null
    _avg: PublishedCourseAvgAggregateOutputType | null
    _sum: PublishedCourseSumAggregateOutputType | null
    _min: PublishedCourseMinAggregateOutputType | null
    _max: PublishedCourseMaxAggregateOutputType | null
  }

  type GetPublishedCourseGroupByPayload<T extends PublishedCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublishedCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublishedCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublishedCourseGroupByOutputType[P]>
            : GetScalarType<T[P], PublishedCourseGroupByOutputType[P]>
        }
      >
    >


  export type PublishedCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    deadline?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    interests?: boolean | PublishedCourse$interestsArgs<ExtArgs>
    _count?: boolean | PublishedCourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publishedCourse"]>

  export type PublishedCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    deadline?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publishedCourse"]>

  export type PublishedCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    deadline?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publishedCourse"]>

  export type PublishedCourseSelectScalar = {
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    deadline?: boolean
  }

  export type PublishedCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "semester" | "year" | "deadline", ExtArgs["result"]["publishedCourse"]>
  export type PublishedCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    interests?: boolean | PublishedCourse$interestsArgs<ExtArgs>
    _count?: boolean | PublishedCourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublishedCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PublishedCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $PublishedCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublishedCourse"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      interests: Prisma.$InterestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      semester: string
      year: number
      deadline: Date
    }, ExtArgs["result"]["publishedCourse"]>
    composites: {}
  }

  type PublishedCourseGetPayload<S extends boolean | null | undefined | PublishedCourseDefaultArgs> = $Result.GetResult<Prisma.$PublishedCoursePayload, S>

  type PublishedCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublishedCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublishedCourseCountAggregateInputType | true
    }

  export interface PublishedCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublishedCourse'], meta: { name: 'PublishedCourse' } }
    /**
     * Find zero or one PublishedCourse that matches the filter.
     * @param {PublishedCourseFindUniqueArgs} args - Arguments to find a PublishedCourse
     * @example
     * // Get one PublishedCourse
     * const publishedCourse = await prisma.publishedCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublishedCourseFindUniqueArgs>(args: SelectSubset<T, PublishedCourseFindUniqueArgs<ExtArgs>>): Prisma__PublishedCourseClient<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublishedCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublishedCourseFindUniqueOrThrowArgs} args - Arguments to find a PublishedCourse
     * @example
     * // Get one PublishedCourse
     * const publishedCourse = await prisma.publishedCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublishedCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, PublishedCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublishedCourseClient<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublishedCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedCourseFindFirstArgs} args - Arguments to find a PublishedCourse
     * @example
     * // Get one PublishedCourse
     * const publishedCourse = await prisma.publishedCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublishedCourseFindFirstArgs>(args?: SelectSubset<T, PublishedCourseFindFirstArgs<ExtArgs>>): Prisma__PublishedCourseClient<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublishedCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedCourseFindFirstOrThrowArgs} args - Arguments to find a PublishedCourse
     * @example
     * // Get one PublishedCourse
     * const publishedCourse = await prisma.publishedCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublishedCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, PublishedCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublishedCourseClient<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublishedCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublishedCourses
     * const publishedCourses = await prisma.publishedCourse.findMany()
     * 
     * // Get first 10 PublishedCourses
     * const publishedCourses = await prisma.publishedCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publishedCourseWithIdOnly = await prisma.publishedCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublishedCourseFindManyArgs>(args?: SelectSubset<T, PublishedCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublishedCourse.
     * @param {PublishedCourseCreateArgs} args - Arguments to create a PublishedCourse.
     * @example
     * // Create one PublishedCourse
     * const PublishedCourse = await prisma.publishedCourse.create({
     *   data: {
     *     // ... data to create a PublishedCourse
     *   }
     * })
     * 
     */
    create<T extends PublishedCourseCreateArgs>(args: SelectSubset<T, PublishedCourseCreateArgs<ExtArgs>>): Prisma__PublishedCourseClient<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublishedCourses.
     * @param {PublishedCourseCreateManyArgs} args - Arguments to create many PublishedCourses.
     * @example
     * // Create many PublishedCourses
     * const publishedCourse = await prisma.publishedCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublishedCourseCreateManyArgs>(args?: SelectSubset<T, PublishedCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublishedCourses and returns the data saved in the database.
     * @param {PublishedCourseCreateManyAndReturnArgs} args - Arguments to create many PublishedCourses.
     * @example
     * // Create many PublishedCourses
     * const publishedCourse = await prisma.publishedCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublishedCourses and only return the `id`
     * const publishedCourseWithIdOnly = await prisma.publishedCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublishedCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, PublishedCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublishedCourse.
     * @param {PublishedCourseDeleteArgs} args - Arguments to delete one PublishedCourse.
     * @example
     * // Delete one PublishedCourse
     * const PublishedCourse = await prisma.publishedCourse.delete({
     *   where: {
     *     // ... filter to delete one PublishedCourse
     *   }
     * })
     * 
     */
    delete<T extends PublishedCourseDeleteArgs>(args: SelectSubset<T, PublishedCourseDeleteArgs<ExtArgs>>): Prisma__PublishedCourseClient<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublishedCourse.
     * @param {PublishedCourseUpdateArgs} args - Arguments to update one PublishedCourse.
     * @example
     * // Update one PublishedCourse
     * const publishedCourse = await prisma.publishedCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublishedCourseUpdateArgs>(args: SelectSubset<T, PublishedCourseUpdateArgs<ExtArgs>>): Prisma__PublishedCourseClient<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublishedCourses.
     * @param {PublishedCourseDeleteManyArgs} args - Arguments to filter PublishedCourses to delete.
     * @example
     * // Delete a few PublishedCourses
     * const { count } = await prisma.publishedCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublishedCourseDeleteManyArgs>(args?: SelectSubset<T, PublishedCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublishedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublishedCourses
     * const publishedCourse = await prisma.publishedCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublishedCourseUpdateManyArgs>(args: SelectSubset<T, PublishedCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublishedCourses and returns the data updated in the database.
     * @param {PublishedCourseUpdateManyAndReturnArgs} args - Arguments to update many PublishedCourses.
     * @example
     * // Update many PublishedCourses
     * const publishedCourse = await prisma.publishedCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublishedCourses and only return the `id`
     * const publishedCourseWithIdOnly = await prisma.publishedCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublishedCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, PublishedCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublishedCourse.
     * @param {PublishedCourseUpsertArgs} args - Arguments to update or create a PublishedCourse.
     * @example
     * // Update or create a PublishedCourse
     * const publishedCourse = await prisma.publishedCourse.upsert({
     *   create: {
     *     // ... data to create a PublishedCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublishedCourse we want to update
     *   }
     * })
     */
    upsert<T extends PublishedCourseUpsertArgs>(args: SelectSubset<T, PublishedCourseUpsertArgs<ExtArgs>>): Prisma__PublishedCourseClient<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublishedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedCourseCountArgs} args - Arguments to filter PublishedCourses to count.
     * @example
     * // Count the number of PublishedCourses
     * const count = await prisma.publishedCourse.count({
     *   where: {
     *     // ... the filter for the PublishedCourses we want to count
     *   }
     * })
    **/
    count<T extends PublishedCourseCountArgs>(
      args?: Subset<T, PublishedCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublishedCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublishedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublishedCourseAggregateArgs>(args: Subset<T, PublishedCourseAggregateArgs>): Prisma.PrismaPromise<GetPublishedCourseAggregateType<T>>

    /**
     * Group by PublishedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublishedCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublishedCourseGroupByArgs['orderBy'] }
        : { orderBy?: PublishedCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublishedCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublishedCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublishedCourse model
   */
  readonly fields: PublishedCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublishedCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublishedCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interests<T extends PublishedCourse$interestsArgs<ExtArgs> = {}>(args?: Subset<T, PublishedCourse$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublishedCourse model
   */
  interface PublishedCourseFieldRefs {
    readonly id: FieldRef<"PublishedCourse", 'Int'>
    readonly courseId: FieldRef<"PublishedCourse", 'Int'>
    readonly semester: FieldRef<"PublishedCourse", 'String'>
    readonly year: FieldRef<"PublishedCourse", 'Int'>
    readonly deadline: FieldRef<"PublishedCourse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublishedCourse findUnique
   */
  export type PublishedCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
    /**
     * Filter, which PublishedCourse to fetch.
     */
    where: PublishedCourseWhereUniqueInput
  }

  /**
   * PublishedCourse findUniqueOrThrow
   */
  export type PublishedCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
    /**
     * Filter, which PublishedCourse to fetch.
     */
    where: PublishedCourseWhereUniqueInput
  }

  /**
   * PublishedCourse findFirst
   */
  export type PublishedCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
    /**
     * Filter, which PublishedCourse to fetch.
     */
    where?: PublishedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublishedCourses to fetch.
     */
    orderBy?: PublishedCourseOrderByWithRelationInput | PublishedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublishedCourses.
     */
    cursor?: PublishedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublishedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublishedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublishedCourses.
     */
    distinct?: PublishedCourseScalarFieldEnum | PublishedCourseScalarFieldEnum[]
  }

  /**
   * PublishedCourse findFirstOrThrow
   */
  export type PublishedCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
    /**
     * Filter, which PublishedCourse to fetch.
     */
    where?: PublishedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublishedCourses to fetch.
     */
    orderBy?: PublishedCourseOrderByWithRelationInput | PublishedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublishedCourses.
     */
    cursor?: PublishedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublishedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublishedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublishedCourses.
     */
    distinct?: PublishedCourseScalarFieldEnum | PublishedCourseScalarFieldEnum[]
  }

  /**
   * PublishedCourse findMany
   */
  export type PublishedCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
    /**
     * Filter, which PublishedCourses to fetch.
     */
    where?: PublishedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublishedCourses to fetch.
     */
    orderBy?: PublishedCourseOrderByWithRelationInput | PublishedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublishedCourses.
     */
    cursor?: PublishedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublishedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublishedCourses.
     */
    skip?: number
    distinct?: PublishedCourseScalarFieldEnum | PublishedCourseScalarFieldEnum[]
  }

  /**
   * PublishedCourse create
   */
  export type PublishedCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a PublishedCourse.
     */
    data: XOR<PublishedCourseCreateInput, PublishedCourseUncheckedCreateInput>
  }

  /**
   * PublishedCourse createMany
   */
  export type PublishedCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublishedCourses.
     */
    data: PublishedCourseCreateManyInput | PublishedCourseCreateManyInput[]
  }

  /**
   * PublishedCourse createManyAndReturn
   */
  export type PublishedCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * The data used to create many PublishedCourses.
     */
    data: PublishedCourseCreateManyInput | PublishedCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublishedCourse update
   */
  export type PublishedCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a PublishedCourse.
     */
    data: XOR<PublishedCourseUpdateInput, PublishedCourseUncheckedUpdateInput>
    /**
     * Choose, which PublishedCourse to update.
     */
    where: PublishedCourseWhereUniqueInput
  }

  /**
   * PublishedCourse updateMany
   */
  export type PublishedCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublishedCourses.
     */
    data: XOR<PublishedCourseUpdateManyMutationInput, PublishedCourseUncheckedUpdateManyInput>
    /**
     * Filter which PublishedCourses to update
     */
    where?: PublishedCourseWhereInput
    /**
     * Limit how many PublishedCourses to update.
     */
    limit?: number
  }

  /**
   * PublishedCourse updateManyAndReturn
   */
  export type PublishedCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * The data used to update PublishedCourses.
     */
    data: XOR<PublishedCourseUpdateManyMutationInput, PublishedCourseUncheckedUpdateManyInput>
    /**
     * Filter which PublishedCourses to update
     */
    where?: PublishedCourseWhereInput
    /**
     * Limit how many PublishedCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublishedCourse upsert
   */
  export type PublishedCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the PublishedCourse to update in case it exists.
     */
    where: PublishedCourseWhereUniqueInput
    /**
     * In case the PublishedCourse found by the `where` argument doesn't exist, create a new PublishedCourse with this data.
     */
    create: XOR<PublishedCourseCreateInput, PublishedCourseUncheckedCreateInput>
    /**
     * In case the PublishedCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublishedCourseUpdateInput, PublishedCourseUncheckedUpdateInput>
  }

  /**
   * PublishedCourse delete
   */
  export type PublishedCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
    /**
     * Filter which PublishedCourse to delete.
     */
    where: PublishedCourseWhereUniqueInput
  }

  /**
   * PublishedCourse deleteMany
   */
  export type PublishedCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublishedCourses to delete
     */
    where?: PublishedCourseWhereInput
    /**
     * Limit how many PublishedCourses to delete.
     */
    limit?: number
  }

  /**
   * PublishedCourse.interests
   */
  export type PublishedCourse$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    cursor?: InterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * PublishedCourse without action
   */
  export type PublishedCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedCourse
     */
    select?: PublishedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedCourse
     */
    omit?: PublishedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublishedCourseInclude<ExtArgs> | null
  }


  /**
   * Model Interest
   */

  export type AggregateInterest = {
    _count: InterestCountAggregateOutputType | null
    _avg: InterestAvgAggregateOutputType | null
    _sum: InterestSumAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  export type InterestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    publishedCourseId: number | null
  }

  export type InterestSumAggregateOutputType = {
    id: number | null
    userId: number | null
    publishedCourseId: number | null
  }

  export type InterestMinAggregateOutputType = {
    id: number | null
    userId: number | null
    publishedCourseId: number | null
    status: string | null
  }

  export type InterestMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    publishedCourseId: number | null
    status: string | null
  }

  export type InterestCountAggregateOutputType = {
    id: number
    userId: number
    publishedCourseId: number
    status: number
    _all: number
  }


  export type InterestAvgAggregateInputType = {
    id?: true
    userId?: true
    publishedCourseId?: true
  }

  export type InterestSumAggregateInputType = {
    id?: true
    userId?: true
    publishedCourseId?: true
  }

  export type InterestMinAggregateInputType = {
    id?: true
    userId?: true
    publishedCourseId?: true
    status?: true
  }

  export type InterestMaxAggregateInputType = {
    id?: true
    userId?: true
    publishedCourseId?: true
    status?: true
  }

  export type InterestCountAggregateInputType = {
    id?: true
    userId?: true
    publishedCourseId?: true
    status?: true
    _all?: true
  }

  export type InterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interest to aggregate.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interests
    **/
    _count?: true | InterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestMaxAggregateInputType
  }

  export type GetInterestAggregateType<T extends InterestAggregateArgs> = {
        [P in keyof T & keyof AggregateInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterest[P]>
      : GetScalarType<T[P], AggregateInterest[P]>
  }




  export type InterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithAggregationInput | InterestOrderByWithAggregationInput[]
    by: InterestScalarFieldEnum[] | InterestScalarFieldEnum
    having?: InterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestCountAggregateInputType | true
    _avg?: InterestAvgAggregateInputType
    _sum?: InterestSumAggregateInputType
    _min?: InterestMinAggregateInputType
    _max?: InterestMaxAggregateInputType
  }

  export type InterestGroupByOutputType = {
    id: number
    userId: number
    publishedCourseId: number
    status: string
    _count: InterestCountAggregateOutputType | null
    _avg: InterestAvgAggregateOutputType | null
    _sum: InterestSumAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  type GetInterestGroupByPayload<T extends InterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestGroupByOutputType[P]>
            : GetScalarType<T[P], InterestGroupByOutputType[P]>
        }
      >
    >


  export type InterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publishedCourseId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    publishedCourse?: boolean | PublishedCourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>

  export type InterestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publishedCourseId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    publishedCourse?: boolean | PublishedCourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>

  export type InterestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publishedCourseId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    publishedCourse?: boolean | PublishedCourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>

  export type InterestSelectScalar = {
    id?: boolean
    userId?: boolean
    publishedCourseId?: boolean
    status?: boolean
  }

  export type InterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "publishedCourseId" | "status", ExtArgs["result"]["interest"]>
  export type InterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    publishedCourse?: boolean | PublishedCourseDefaultArgs<ExtArgs>
  }
  export type InterestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    publishedCourse?: boolean | PublishedCourseDefaultArgs<ExtArgs>
  }
  export type InterestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    publishedCourse?: boolean | PublishedCourseDefaultArgs<ExtArgs>
  }

  export type $InterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      publishedCourse: Prisma.$PublishedCoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      publishedCourseId: number
      status: string
    }, ExtArgs["result"]["interest"]>
    composites: {}
  }

  type InterestGetPayload<S extends boolean | null | undefined | InterestDefaultArgs> = $Result.GetResult<Prisma.$InterestPayload, S>

  type InterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestCountAggregateInputType | true
    }

  export interface InterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interest'], meta: { name: 'Interest' } }
    /**
     * Find zero or one Interest that matches the filter.
     * @param {InterestFindUniqueArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestFindUniqueArgs>(args: SelectSubset<T, InterestFindUniqueArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestFindUniqueOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestFindFirstArgs>(args?: SelectSubset<T, InterestFindFirstArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interests
     * const interests = await prisma.interest.findMany()
     * 
     * // Get first 10 Interests
     * const interests = await prisma.interest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestWithIdOnly = await prisma.interest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterestFindManyArgs>(args?: SelectSubset<T, InterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interest.
     * @param {InterestCreateArgs} args - Arguments to create a Interest.
     * @example
     * // Create one Interest
     * const Interest = await prisma.interest.create({
     *   data: {
     *     // ... data to create a Interest
     *   }
     * })
     * 
     */
    create<T extends InterestCreateArgs>(args: SelectSubset<T, InterestCreateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interests.
     * @param {InterestCreateManyArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interest = await prisma.interest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestCreateManyArgs>(args?: SelectSubset<T, InterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interests and returns the data saved in the database.
     * @param {InterestCreateManyAndReturnArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interest = await prisma.interest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interests and only return the `id`
     * const interestWithIdOnly = await prisma.interest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterestCreateManyAndReturnArgs>(args?: SelectSubset<T, InterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interest.
     * @param {InterestDeleteArgs} args - Arguments to delete one Interest.
     * @example
     * // Delete one Interest
     * const Interest = await prisma.interest.delete({
     *   where: {
     *     // ... filter to delete one Interest
     *   }
     * })
     * 
     */
    delete<T extends InterestDeleteArgs>(args: SelectSubset<T, InterestDeleteArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interest.
     * @param {InterestUpdateArgs} args - Arguments to update one Interest.
     * @example
     * // Update one Interest
     * const interest = await prisma.interest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterestUpdateArgs>(args: SelectSubset<T, InterestUpdateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interests.
     * @param {InterestDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestDeleteManyArgs>(args?: SelectSubset<T, InterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterestUpdateManyArgs>(args: SelectSubset<T, InterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests and returns the data updated in the database.
     * @param {InterestUpdateManyAndReturnArgs} args - Arguments to update many Interests.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interests and only return the `id`
     * const interestWithIdOnly = await prisma.interest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterestUpdateManyAndReturnArgs>(args: SelectSubset<T, InterestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interest.
     * @param {InterestUpsertArgs} args - Arguments to update or create a Interest.
     * @example
     * // Update or create a Interest
     * const interest = await prisma.interest.upsert({
     *   create: {
     *     // ... data to create a Interest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interest we want to update
     *   }
     * })
     */
    upsert<T extends InterestUpsertArgs>(args: SelectSubset<T, InterestUpsertArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interest.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends InterestCountArgs>(
      args?: Subset<T, InterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterestAggregateArgs>(args: Subset<T, InterestAggregateArgs>): Prisma.PrismaPromise<GetInterestAggregateType<T>>

    /**
     * Group by Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestGroupByArgs['orderBy'] }
        : { orderBy?: InterestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interest model
   */
  readonly fields: InterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    publishedCourse<T extends PublishedCourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublishedCourseDefaultArgs<ExtArgs>>): Prisma__PublishedCourseClient<$Result.GetResult<Prisma.$PublishedCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interest model
   */
  interface InterestFieldRefs {
    readonly id: FieldRef<"Interest", 'Int'>
    readonly userId: FieldRef<"Interest", 'Int'>
    readonly publishedCourseId: FieldRef<"Interest", 'Int'>
    readonly status: FieldRef<"Interest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Interest findUnique
   */
  export type InterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findUniqueOrThrow
   */
  export type InterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findFirst
   */
  export type InterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findFirstOrThrow
   */
  export type InterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findMany
   */
  export type InterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest create
   */
  export type InterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to create a Interest.
     */
    data: XOR<InterestCreateInput, InterestUncheckedCreateInput>
  }

  /**
   * Interest createMany
   */
  export type InterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interests.
     */
    data: InterestCreateManyInput | InterestCreateManyInput[]
  }

  /**
   * Interest createManyAndReturn
   */
  export type InterestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * The data used to create many Interests.
     */
    data: InterestCreateManyInput | InterestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interest update
   */
  export type InterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to update a Interest.
     */
    data: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
    /**
     * Choose, which Interest to update.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest updateMany
   */
  export type InterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
  }

  /**
   * Interest updateManyAndReturn
   */
  export type InterestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interest upsert
   */
  export type InterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The filter to search for the Interest to update in case it exists.
     */
    where: InterestWhereUniqueInput
    /**
     * In case the Interest found by the `where` argument doesn't exist, create a new Interest with this data.
     */
    create: XOR<InterestCreateInput, InterestUncheckedCreateInput>
    /**
     * In case the Interest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
  }

  /**
   * Interest delete
   */
  export type InterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter which Interest to delete.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest deleteMany
   */
  export type InterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interests to delete
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to delete.
     */
    limit?: number
  }

  /**
   * Interest without action
   */
  export type InterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    category: 'category'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    semester: 'semester',
    year: 'year',
    userId: 'userId',
    availableSeats: 'availableSeats',
    studentEnrolled: 'studentEnrolled',
    isValidated: 'isValidated',
    time: 'time'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const PrerequisiteScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    prerequisiteCourseId: 'prerequisiteCourseId'
  };

  export type PrerequisiteScalarFieldEnum = (typeof PrerequisiteScalarFieldEnum)[keyof typeof PrerequisiteScalarFieldEnum]


  export const CompletedCourseScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    userId: 'userId',
    grade: 'grade'
  };

  export type CompletedCourseScalarFieldEnum = (typeof CompletedCourseScalarFieldEnum)[keyof typeof CompletedCourseScalarFieldEnum]


  export const InProgressCourseScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    userId: 'userId',
    grade: 'grade'
  };

  export type InProgressCourseScalarFieldEnum = (typeof InProgressCourseScalarFieldEnum)[keyof typeof InProgressCourseScalarFieldEnum]


  export const PendingCourseScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    userId: 'userId'
  };

  export type PendingCourseScalarFieldEnum = (typeof PendingCourseScalarFieldEnum)[keyof typeof PendingCourseScalarFieldEnum]


  export const PublishedCourseScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    semester: 'semester',
    year: 'year',
    deadline: 'deadline'
  };

  export type PublishedCourseScalarFieldEnum = (typeof PublishedCourseScalarFieldEnum)[keyof typeof PublishedCourseScalarFieldEnum]


  export const InterestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    publishedCourseId: 'publishedCourseId',
    status: 'status'
  };

  export type InterestScalarFieldEnum = (typeof InterestScalarFieldEnum)[keyof typeof InterestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    pendingCourses?: PendingCourseListRelationFilter
    completedCourses?: CompletedCourseListRelationFilter
    inprogressCourses?: InProgressCourseListRelationFilter
    classes?: ClassListRelationFilter
    interests?: InterestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    pendingCourses?: PendingCourseOrderByRelationAggregateInput
    completedCourses?: CompletedCourseOrderByRelationAggregateInput
    inprogressCourses?: InProgressCourseOrderByRelationAggregateInput
    classes?: ClassOrderByRelationAggregateInput
    interests?: InterestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    pendingCourses?: PendingCourseListRelationFilter
    completedCourses?: CompletedCourseListRelationFilter
    inprogressCourses?: InProgressCourseListRelationFilter
    classes?: ClassListRelationFilter
    interests?: InterestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    classes?: ClassListRelationFilter
    prerequisites?: PrerequisiteListRelationFilter
    requiredBy?: PrerequisiteListRelationFilter
    publishedCourses?: PublishedCourseListRelationFilter
    pendingBy?: PendingCourseListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    category?: SortOrder
    classes?: ClassOrderByRelationAggregateInput
    prerequisites?: PrerequisiteOrderByRelationAggregateInput
    requiredBy?: PrerequisiteOrderByRelationAggregateInput
    publishedCourses?: PublishedCourseOrderByRelationAggregateInput
    pendingBy?: PendingCourseOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    classes?: ClassListRelationFilter
    prerequisites?: PrerequisiteListRelationFilter
    requiredBy?: PrerequisiteListRelationFilter
    publishedCourses?: PublishedCourseListRelationFilter
    pendingBy?: PendingCourseListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    category?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    code?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    category?: StringWithAggregatesFilter<"Course"> | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: IntFilter<"Class"> | number
    courseId?: IntFilter<"Class"> | number
    semester?: StringFilter<"Class"> | string
    year?: IntFilter<"Class"> | number
    userId?: IntFilter<"Class"> | number
    availableSeats?: IntFilter<"Class"> | number
    studentEnrolled?: IntFilter<"Class"> | number
    isValidated?: IntFilter<"Class"> | number
    time?: StringFilter<"Class"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    completedBy?: CompletedCourseListRelationFilter
    inProgressBy?: InProgressCourseListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    userId?: SortOrder
    availableSeats?: SortOrder
    studentEnrolled?: SortOrder
    isValidated?: SortOrder
    time?: SortOrder
    course?: CourseOrderByWithRelationInput
    instructor?: UserOrderByWithRelationInput
    completedBy?: CompletedCourseOrderByRelationAggregateInput
    inProgressBy?: InProgressCourseOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    courseId?: IntFilter<"Class"> | number
    semester?: StringFilter<"Class"> | string
    year?: IntFilter<"Class"> | number
    userId?: IntFilter<"Class"> | number
    availableSeats?: IntFilter<"Class"> | number
    studentEnrolled?: IntFilter<"Class"> | number
    isValidated?: IntFilter<"Class"> | number
    time?: StringFilter<"Class"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    completedBy?: CompletedCourseListRelationFilter
    inProgressBy?: InProgressCourseListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    userId?: SortOrder
    availableSeats?: SortOrder
    studentEnrolled?: SortOrder
    isValidated?: SortOrder
    time?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Class"> | number
    courseId?: IntWithAggregatesFilter<"Class"> | number
    semester?: StringWithAggregatesFilter<"Class"> | string
    year?: IntWithAggregatesFilter<"Class"> | number
    userId?: IntWithAggregatesFilter<"Class"> | number
    availableSeats?: IntWithAggregatesFilter<"Class"> | number
    studentEnrolled?: IntWithAggregatesFilter<"Class"> | number
    isValidated?: IntWithAggregatesFilter<"Class"> | number
    time?: StringWithAggregatesFilter<"Class"> | string
  }

  export type PrerequisiteWhereInput = {
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    id?: IntFilter<"Prerequisite"> | number
    courseId?: IntFilter<"Prerequisite"> | number
    prerequisiteCourseId?: IntFilter<"Prerequisite"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    prerequisiteCourse?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type PrerequisiteOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteCourseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    prerequisiteCourse?: CourseOrderByWithRelationInput
  }

  export type PrerequisiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    courseId?: IntFilter<"Prerequisite"> | number
    prerequisiteCourseId?: IntFilter<"Prerequisite"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    prerequisiteCourse?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type PrerequisiteOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteCourseId?: SortOrder
    _count?: PrerequisiteCountOrderByAggregateInput
    _avg?: PrerequisiteAvgOrderByAggregateInput
    _max?: PrerequisiteMaxOrderByAggregateInput
    _min?: PrerequisiteMinOrderByAggregateInput
    _sum?: PrerequisiteSumOrderByAggregateInput
  }

  export type PrerequisiteScalarWhereWithAggregatesInput = {
    AND?: PrerequisiteScalarWhereWithAggregatesInput | PrerequisiteScalarWhereWithAggregatesInput[]
    OR?: PrerequisiteScalarWhereWithAggregatesInput[]
    NOT?: PrerequisiteScalarWhereWithAggregatesInput | PrerequisiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prerequisite"> | number
    courseId?: IntWithAggregatesFilter<"Prerequisite"> | number
    prerequisiteCourseId?: IntWithAggregatesFilter<"Prerequisite"> | number
  }

  export type CompletedCourseWhereInput = {
    AND?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    OR?: CompletedCourseWhereInput[]
    NOT?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    id?: IntFilter<"CompletedCourse"> | number
    classId?: IntFilter<"CompletedCourse"> | number
    userId?: IntFilter<"CompletedCourse"> | number
    grade?: StringNullableFilter<"CompletedCourse"> | string | null
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompletedCourseOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    grade?: SortOrderInput | SortOrder
    class?: ClassOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CompletedCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    OR?: CompletedCourseWhereInput[]
    NOT?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    classId?: IntFilter<"CompletedCourse"> | number
    userId?: IntFilter<"CompletedCourse"> | number
    grade?: StringNullableFilter<"CompletedCourse"> | string | null
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CompletedCourseOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    grade?: SortOrderInput | SortOrder
    _count?: CompletedCourseCountOrderByAggregateInput
    _avg?: CompletedCourseAvgOrderByAggregateInput
    _max?: CompletedCourseMaxOrderByAggregateInput
    _min?: CompletedCourseMinOrderByAggregateInput
    _sum?: CompletedCourseSumOrderByAggregateInput
  }

  export type CompletedCourseScalarWhereWithAggregatesInput = {
    AND?: CompletedCourseScalarWhereWithAggregatesInput | CompletedCourseScalarWhereWithAggregatesInput[]
    OR?: CompletedCourseScalarWhereWithAggregatesInput[]
    NOT?: CompletedCourseScalarWhereWithAggregatesInput | CompletedCourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompletedCourse"> | number
    classId?: IntWithAggregatesFilter<"CompletedCourse"> | number
    userId?: IntWithAggregatesFilter<"CompletedCourse"> | number
    grade?: StringNullableWithAggregatesFilter<"CompletedCourse"> | string | null
  }

  export type InProgressCourseWhereInput = {
    AND?: InProgressCourseWhereInput | InProgressCourseWhereInput[]
    OR?: InProgressCourseWhereInput[]
    NOT?: InProgressCourseWhereInput | InProgressCourseWhereInput[]
    id?: IntFilter<"InProgressCourse"> | number
    classId?: IntFilter<"InProgressCourse"> | number
    userId?: IntFilter<"InProgressCourse"> | number
    grade?: StringNullableFilter<"InProgressCourse"> | string | null
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InProgressCourseOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    grade?: SortOrderInput | SortOrder
    class?: ClassOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type InProgressCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InProgressCourseWhereInput | InProgressCourseWhereInput[]
    OR?: InProgressCourseWhereInput[]
    NOT?: InProgressCourseWhereInput | InProgressCourseWhereInput[]
    classId?: IntFilter<"InProgressCourse"> | number
    userId?: IntFilter<"InProgressCourse"> | number
    grade?: StringNullableFilter<"InProgressCourse"> | string | null
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InProgressCourseOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    grade?: SortOrderInput | SortOrder
    _count?: InProgressCourseCountOrderByAggregateInput
    _avg?: InProgressCourseAvgOrderByAggregateInput
    _max?: InProgressCourseMaxOrderByAggregateInput
    _min?: InProgressCourseMinOrderByAggregateInput
    _sum?: InProgressCourseSumOrderByAggregateInput
  }

  export type InProgressCourseScalarWhereWithAggregatesInput = {
    AND?: InProgressCourseScalarWhereWithAggregatesInput | InProgressCourseScalarWhereWithAggregatesInput[]
    OR?: InProgressCourseScalarWhereWithAggregatesInput[]
    NOT?: InProgressCourseScalarWhereWithAggregatesInput | InProgressCourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InProgressCourse"> | number
    classId?: IntWithAggregatesFilter<"InProgressCourse"> | number
    userId?: IntWithAggregatesFilter<"InProgressCourse"> | number
    grade?: StringNullableWithAggregatesFilter<"InProgressCourse"> | string | null
  }

  export type PendingCourseWhereInput = {
    AND?: PendingCourseWhereInput | PendingCourseWhereInput[]
    OR?: PendingCourseWhereInput[]
    NOT?: PendingCourseWhereInput | PendingCourseWhereInput[]
    id?: IntFilter<"PendingCourse"> | number
    courseId?: IntFilter<"PendingCourse"> | number
    userId?: IntFilter<"PendingCourse"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PendingCourseOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PendingCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PendingCourseWhereInput | PendingCourseWhereInput[]
    OR?: PendingCourseWhereInput[]
    NOT?: PendingCourseWhereInput | PendingCourseWhereInput[]
    courseId?: IntFilter<"PendingCourse"> | number
    userId?: IntFilter<"PendingCourse"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PendingCourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    _count?: PendingCourseCountOrderByAggregateInput
    _avg?: PendingCourseAvgOrderByAggregateInput
    _max?: PendingCourseMaxOrderByAggregateInput
    _min?: PendingCourseMinOrderByAggregateInput
    _sum?: PendingCourseSumOrderByAggregateInput
  }

  export type PendingCourseScalarWhereWithAggregatesInput = {
    AND?: PendingCourseScalarWhereWithAggregatesInput | PendingCourseScalarWhereWithAggregatesInput[]
    OR?: PendingCourseScalarWhereWithAggregatesInput[]
    NOT?: PendingCourseScalarWhereWithAggregatesInput | PendingCourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PendingCourse"> | number
    courseId?: IntWithAggregatesFilter<"PendingCourse"> | number
    userId?: IntWithAggregatesFilter<"PendingCourse"> | number
  }

  export type PublishedCourseWhereInput = {
    AND?: PublishedCourseWhereInput | PublishedCourseWhereInput[]
    OR?: PublishedCourseWhereInput[]
    NOT?: PublishedCourseWhereInput | PublishedCourseWhereInput[]
    id?: IntFilter<"PublishedCourse"> | number
    courseId?: IntFilter<"PublishedCourse"> | number
    semester?: StringFilter<"PublishedCourse"> | string
    year?: IntFilter<"PublishedCourse"> | number
    deadline?: DateTimeFilter<"PublishedCourse"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    interests?: InterestListRelationFilter
  }

  export type PublishedCourseOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    deadline?: SortOrder
    course?: CourseOrderByWithRelationInput
    interests?: InterestOrderByRelationAggregateInput
  }

  export type PublishedCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublishedCourseWhereInput | PublishedCourseWhereInput[]
    OR?: PublishedCourseWhereInput[]
    NOT?: PublishedCourseWhereInput | PublishedCourseWhereInput[]
    courseId?: IntFilter<"PublishedCourse"> | number
    semester?: StringFilter<"PublishedCourse"> | string
    year?: IntFilter<"PublishedCourse"> | number
    deadline?: DateTimeFilter<"PublishedCourse"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    interests?: InterestListRelationFilter
  }, "id">

  export type PublishedCourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    deadline?: SortOrder
    _count?: PublishedCourseCountOrderByAggregateInput
    _avg?: PublishedCourseAvgOrderByAggregateInput
    _max?: PublishedCourseMaxOrderByAggregateInput
    _min?: PublishedCourseMinOrderByAggregateInput
    _sum?: PublishedCourseSumOrderByAggregateInput
  }

  export type PublishedCourseScalarWhereWithAggregatesInput = {
    AND?: PublishedCourseScalarWhereWithAggregatesInput | PublishedCourseScalarWhereWithAggregatesInput[]
    OR?: PublishedCourseScalarWhereWithAggregatesInput[]
    NOT?: PublishedCourseScalarWhereWithAggregatesInput | PublishedCourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PublishedCourse"> | number
    courseId?: IntWithAggregatesFilter<"PublishedCourse"> | number
    semester?: StringWithAggregatesFilter<"PublishedCourse"> | string
    year?: IntWithAggregatesFilter<"PublishedCourse"> | number
    deadline?: DateTimeWithAggregatesFilter<"PublishedCourse"> | Date | string
  }

  export type InterestWhereInput = {
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    id?: IntFilter<"Interest"> | number
    userId?: IntFilter<"Interest"> | number
    publishedCourseId?: IntFilter<"Interest"> | number
    status?: StringFilter<"Interest"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    publishedCourse?: XOR<PublishedCourseScalarRelationFilter, PublishedCourseWhereInput>
  }

  export type InterestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    publishedCourseId?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    publishedCourse?: PublishedCourseOrderByWithRelationInput
  }

  export type InterestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    userId?: IntFilter<"Interest"> | number
    publishedCourseId?: IntFilter<"Interest"> | number
    status?: StringFilter<"Interest"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    publishedCourse?: XOR<PublishedCourseScalarRelationFilter, PublishedCourseWhereInput>
  }, "id">

  export type InterestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    publishedCourseId?: SortOrder
    status?: SortOrder
    _count?: InterestCountOrderByAggregateInput
    _avg?: InterestAvgOrderByAggregateInput
    _max?: InterestMaxOrderByAggregateInput
    _min?: InterestMinOrderByAggregateInput
    _sum?: InterestSumOrderByAggregateInput
  }

  export type InterestScalarWhereWithAggregatesInput = {
    AND?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    OR?: InterestScalarWhereWithAggregatesInput[]
    NOT?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interest"> | number
    userId?: IntWithAggregatesFilter<"Interest"> | number
    publishedCourseId?: IntWithAggregatesFilter<"Interest"> | number
    status?: StringWithAggregatesFilter<"Interest"> | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    pendingCourses?: PendingCourseCreateNestedManyWithoutUserInput
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    inprogressCourses?: InProgressCourseCreateNestedManyWithoutUserInput
    classes?: ClassCreateNestedManyWithoutInstructorInput
    interests?: InterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    pendingCourses?: PendingCourseUncheckedCreateNestedManyWithoutUserInput
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    inprogressCourses?: InProgressCourseUncheckedCreateNestedManyWithoutUserInput
    classes?: ClassUncheckedCreateNestedManyWithoutInstructorInput
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pendingCourses?: PendingCourseUpdateManyWithoutUserNestedInput
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    inprogressCourses?: InProgressCourseUpdateManyWithoutUserNestedInput
    classes?: ClassUpdateManyWithoutInstructorNestedInput
    interests?: InterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pendingCourses?: PendingCourseUncheckedUpdateManyWithoutUserNestedInput
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    inprogressCourses?: InProgressCourseUncheckedUpdateManyWithoutUserNestedInput
    classes?: ClassUncheckedUpdateManyWithoutInstructorNestedInput
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CourseCreateInput = {
    code: string
    name: string
    category: string
    classes?: ClassCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    requiredBy?: PrerequisiteCreateNestedManyWithoutPrerequisiteCourseInput
    publishedCourses?: PublishedCourseCreateNestedManyWithoutCourseInput
    pendingBy?: PendingCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    category: string
    classes?: ClassUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    requiredBy?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteCourseInput
    publishedCourses?: PublishedCourseUncheckedCreateNestedManyWithoutCourseInput
    pendingBy?: PendingCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    classes?: ClassUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    requiredBy?: PrerequisiteUpdateManyWithoutPrerequisiteCourseNestedInput
    publishedCourses?: PublishedCourseUpdateManyWithoutCourseNestedInput
    pendingBy?: PendingCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    classes?: ClassUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    requiredBy?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteCourseNestedInput
    publishedCourses?: PublishedCourseUncheckedUpdateManyWithoutCourseNestedInput
    pendingBy?: PendingCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    code: string
    name: string
    category: string
  }

  export type CourseUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateInput = {
    semester: string
    year: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    course: CourseCreateNestedOneWithoutClassesInput
    instructor: UserCreateNestedOneWithoutClassesInput
    completedBy?: CompletedCourseCreateNestedManyWithoutClassInput
    inProgressBy?: InProgressCourseCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: number
    courseId: number
    semester: string
    year: number
    userId: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    completedBy?: CompletedCourseUncheckedCreateNestedManyWithoutClassInput
    inProgressBy?: InProgressCourseUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutClassesNestedInput
    instructor?: UserUpdateOneRequiredWithoutClassesNestedInput
    completedBy?: CompletedCourseUpdateManyWithoutClassNestedInput
    inProgressBy?: InProgressCourseUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    completedBy?: CompletedCourseUncheckedUpdateManyWithoutClassNestedInput
    inProgressBy?: InProgressCourseUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: number
    courseId: number
    semester: string
    year: number
    userId: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
  }

  export type ClassUpdateManyMutationInput = {
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteCreateInput = {
    course: CourseCreateNestedOneWithoutPrerequisitesInput
    prerequisiteCourse: CourseCreateNestedOneWithoutRequiredByInput
  }

  export type PrerequisiteUncheckedCreateInput = {
    id?: number
    courseId: number
    prerequisiteCourseId: number
  }

  export type PrerequisiteUpdateInput = {
    course?: CourseUpdateOneRequiredWithoutPrerequisitesNestedInput
    prerequisiteCourse?: CourseUpdateOneRequiredWithoutRequiredByNestedInput
  }

  export type PrerequisiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    prerequisiteCourseId?: IntFieldUpdateOperationsInput | number
  }

  export type PrerequisiteCreateManyInput = {
    id?: number
    courseId: number
    prerequisiteCourseId: number
  }

  export type PrerequisiteUpdateManyMutationInput = {

  }

  export type PrerequisiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    prerequisiteCourseId?: IntFieldUpdateOperationsInput | number
  }

  export type CompletedCourseCreateInput = {
    grade?: string | null
    class: ClassCreateNestedOneWithoutCompletedByInput
    user: UserCreateNestedOneWithoutCompletedCoursesInput
  }

  export type CompletedCourseUncheckedCreateInput = {
    id?: number
    classId: number
    userId: number
    grade?: string | null
  }

  export type CompletedCourseUpdateInput = {
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneRequiredWithoutCompletedByNestedInput
    user?: UserUpdateOneRequiredWithoutCompletedCoursesNestedInput
  }

  export type CompletedCourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedCourseCreateManyInput = {
    id?: number
    classId: number
    userId: number
    grade?: string | null
  }

  export type CompletedCourseUpdateManyMutationInput = {
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedCourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InProgressCourseCreateInput = {
    grade?: string | null
    class: ClassCreateNestedOneWithoutInProgressByInput
    user: UserCreateNestedOneWithoutInprogressCoursesInput
  }

  export type InProgressCourseUncheckedCreateInput = {
    id?: number
    classId: number
    userId: number
    grade?: string | null
  }

  export type InProgressCourseUpdateInput = {
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneRequiredWithoutInProgressByNestedInput
    user?: UserUpdateOneRequiredWithoutInprogressCoursesNestedInput
  }

  export type InProgressCourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InProgressCourseCreateManyInput = {
    id?: number
    classId: number
    userId: number
    grade?: string | null
  }

  export type InProgressCourseUpdateManyMutationInput = {
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InProgressCourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PendingCourseCreateInput = {
    course: CourseCreateNestedOneWithoutPendingByInput
    user: UserCreateNestedOneWithoutPendingCoursesInput
  }

  export type PendingCourseUncheckedCreateInput = {
    id?: number
    courseId: number
    userId: number
  }

  export type PendingCourseUpdateInput = {
    course?: CourseUpdateOneRequiredWithoutPendingByNestedInput
    user?: UserUpdateOneRequiredWithoutPendingCoursesNestedInput
  }

  export type PendingCourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PendingCourseCreateManyInput = {
    id?: number
    courseId: number
    userId: number
  }

  export type PendingCourseUpdateManyMutationInput = {

  }

  export type PendingCourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PublishedCourseCreateInput = {
    semester: string
    year: number
    deadline: Date | string
    course: CourseCreateNestedOneWithoutPublishedCoursesInput
    interests?: InterestCreateNestedManyWithoutPublishedCourseInput
  }

  export type PublishedCourseUncheckedCreateInput = {
    id?: number
    courseId: number
    semester: string
    year: number
    deadline: Date | string
    interests?: InterestUncheckedCreateNestedManyWithoutPublishedCourseInput
  }

  export type PublishedCourseUpdateInput = {
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutPublishedCoursesNestedInput
    interests?: InterestUpdateManyWithoutPublishedCourseNestedInput
  }

  export type PublishedCourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InterestUncheckedUpdateManyWithoutPublishedCourseNestedInput
  }

  export type PublishedCourseCreateManyInput = {
    id?: number
    courseId: number
    semester: string
    year: number
    deadline: Date | string
  }

  export type PublishedCourseUpdateManyMutationInput = {
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublishedCourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterestCreateInput = {
    status: string
    user: UserCreateNestedOneWithoutInterestsInput
    publishedCourse: PublishedCourseCreateNestedOneWithoutInterestsInput
  }

  export type InterestUncheckedCreateInput = {
    id?: number
    userId: number
    publishedCourseId: number
    status: string
  }

  export type InterestUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
    publishedCourse?: PublishedCourseUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type InterestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    publishedCourseId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InterestCreateManyInput = {
    id?: number
    userId: number
    publishedCourseId: number
    status: string
  }

  export type InterestUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    publishedCourseId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PendingCourseListRelationFilter = {
    every?: PendingCourseWhereInput
    some?: PendingCourseWhereInput
    none?: PendingCourseWhereInput
  }

  export type CompletedCourseListRelationFilter = {
    every?: CompletedCourseWhereInput
    some?: CompletedCourseWhereInput
    none?: CompletedCourseWhereInput
  }

  export type InProgressCourseListRelationFilter = {
    every?: InProgressCourseWhereInput
    some?: InProgressCourseWhereInput
    none?: InProgressCourseWhereInput
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type InterestListRelationFilter = {
    every?: InterestWhereInput
    some?: InterestWhereInput
    none?: InterestWhereInput
  }

  export type PendingCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompletedCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InProgressCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type PrerequisiteListRelationFilter = {
    every?: PrerequisiteWhereInput
    some?: PrerequisiteWhereInput
    none?: PrerequisiteWhereInput
  }

  export type PublishedCourseListRelationFilter = {
    every?: PublishedCourseWhereInput
    some?: PublishedCourseWhereInput
    none?: PublishedCourseWhereInput
  }

  export type PrerequisiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublishedCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    userId?: SortOrder
    availableSeats?: SortOrder
    studentEnrolled?: SortOrder
    isValidated?: SortOrder
    time?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    year?: SortOrder
    userId?: SortOrder
    availableSeats?: SortOrder
    studentEnrolled?: SortOrder
    isValidated?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    userId?: SortOrder
    availableSeats?: SortOrder
    studentEnrolled?: SortOrder
    isValidated?: SortOrder
    time?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    userId?: SortOrder
    availableSeats?: SortOrder
    studentEnrolled?: SortOrder
    isValidated?: SortOrder
    time?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    year?: SortOrder
    userId?: SortOrder
    availableSeats?: SortOrder
    studentEnrolled?: SortOrder
    isValidated?: SortOrder
  }

  export type PrerequisiteCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteCourseId?: SortOrder
  }

  export type PrerequisiteAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteCourseId?: SortOrder
  }

  export type PrerequisiteMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteCourseId?: SortOrder
  }

  export type PrerequisiteMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteCourseId?: SortOrder
  }

  export type PrerequisiteSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteCourseId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompletedCourseCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    grade?: SortOrder
  }

  export type CompletedCourseAvgOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
  }

  export type CompletedCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    grade?: SortOrder
  }

  export type CompletedCourseMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    grade?: SortOrder
  }

  export type CompletedCourseSumOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type InProgressCourseCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    grade?: SortOrder
  }

  export type InProgressCourseAvgOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
  }

  export type InProgressCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    grade?: SortOrder
  }

  export type InProgressCourseMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    grade?: SortOrder
  }

  export type InProgressCourseSumOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
  }

  export type PendingCourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type PendingCourseAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type PendingCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type PendingCourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type PendingCourseSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PublishedCourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    deadline?: SortOrder
  }

  export type PublishedCourseAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    year?: SortOrder
  }

  export type PublishedCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    deadline?: SortOrder
  }

  export type PublishedCourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    deadline?: SortOrder
  }

  export type PublishedCourseSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    year?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PublishedCourseScalarRelationFilter = {
    is?: PublishedCourseWhereInput
    isNot?: PublishedCourseWhereInput
  }

  export type InterestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publishedCourseId?: SortOrder
    status?: SortOrder
  }

  export type InterestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publishedCourseId?: SortOrder
  }

  export type InterestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publishedCourseId?: SortOrder
    status?: SortOrder
  }

  export type InterestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publishedCourseId?: SortOrder
    status?: SortOrder
  }

  export type InterestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publishedCourseId?: SortOrder
  }

  export type PendingCourseCreateNestedManyWithoutUserInput = {
    create?: XOR<PendingCourseCreateWithoutUserInput, PendingCourseUncheckedCreateWithoutUserInput> | PendingCourseCreateWithoutUserInput[] | PendingCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PendingCourseCreateOrConnectWithoutUserInput | PendingCourseCreateOrConnectWithoutUserInput[]
    createMany?: PendingCourseCreateManyUserInputEnvelope
    connect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
  }

  export type CompletedCourseCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type InProgressCourseCreateNestedManyWithoutUserInput = {
    create?: XOR<InProgressCourseCreateWithoutUserInput, InProgressCourseUncheckedCreateWithoutUserInput> | InProgressCourseCreateWithoutUserInput[] | InProgressCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InProgressCourseCreateOrConnectWithoutUserInput | InProgressCourseCreateOrConnectWithoutUserInput[]
    createMany?: InProgressCourseCreateManyUserInputEnvelope
    connect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutInstructorInput = {
    create?: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput> | ClassCreateWithoutInstructorInput[] | ClassUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorInput | ClassCreateOrConnectWithoutInstructorInput[]
    createMany?: ClassCreateManyInstructorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type InterestCreateNestedManyWithoutUserInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
  }

  export type PendingCourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PendingCourseCreateWithoutUserInput, PendingCourseUncheckedCreateWithoutUserInput> | PendingCourseCreateWithoutUserInput[] | PendingCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PendingCourseCreateOrConnectWithoutUserInput | PendingCourseCreateOrConnectWithoutUserInput[]
    createMany?: PendingCourseCreateManyUserInputEnvelope
    connect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
  }

  export type CompletedCourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type InProgressCourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InProgressCourseCreateWithoutUserInput, InProgressCourseUncheckedCreateWithoutUserInput> | InProgressCourseCreateWithoutUserInput[] | InProgressCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InProgressCourseCreateOrConnectWithoutUserInput | InProgressCourseCreateOrConnectWithoutUserInput[]
    createMany?: InProgressCourseCreateManyUserInputEnvelope
    connect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput> | ClassCreateWithoutInstructorInput[] | ClassUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorInput | ClassCreateOrConnectWithoutInstructorInput[]
    createMany?: ClassCreateManyInstructorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type InterestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PendingCourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PendingCourseCreateWithoutUserInput, PendingCourseUncheckedCreateWithoutUserInput> | PendingCourseCreateWithoutUserInput[] | PendingCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PendingCourseCreateOrConnectWithoutUserInput | PendingCourseCreateOrConnectWithoutUserInput[]
    upsert?: PendingCourseUpsertWithWhereUniqueWithoutUserInput | PendingCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PendingCourseCreateManyUserInputEnvelope
    set?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    disconnect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    delete?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    connect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    update?: PendingCourseUpdateWithWhereUniqueWithoutUserInput | PendingCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PendingCourseUpdateManyWithWhereWithoutUserInput | PendingCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PendingCourseScalarWhereInput | PendingCourseScalarWhereInput[]
  }

  export type CompletedCourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutUserInput | CompletedCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutUserInput | CompletedCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutUserInput | CompletedCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type InProgressCourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<InProgressCourseCreateWithoutUserInput, InProgressCourseUncheckedCreateWithoutUserInput> | InProgressCourseCreateWithoutUserInput[] | InProgressCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InProgressCourseCreateOrConnectWithoutUserInput | InProgressCourseCreateOrConnectWithoutUserInput[]
    upsert?: InProgressCourseUpsertWithWhereUniqueWithoutUserInput | InProgressCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InProgressCourseCreateManyUserInputEnvelope
    set?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    disconnect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    delete?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    connect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    update?: InProgressCourseUpdateWithWhereUniqueWithoutUserInput | InProgressCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InProgressCourseUpdateManyWithWhereWithoutUserInput | InProgressCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InProgressCourseScalarWhereInput | InProgressCourseScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput> | ClassCreateWithoutInstructorInput[] | ClassUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorInput | ClassCreateOrConnectWithoutInstructorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutInstructorInput | ClassUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: ClassCreateManyInstructorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutInstructorInput | ClassUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutInstructorInput | ClassUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type InterestUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    upsert?: InterestUpsertWithWhereUniqueWithoutUserInput | InterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    set?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    disconnect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    delete?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    update?: InterestUpdateWithWhereUniqueWithoutUserInput | InterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterestUpdateManyWithWhereWithoutUserInput | InterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterestScalarWhereInput | InterestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PendingCourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PendingCourseCreateWithoutUserInput, PendingCourseUncheckedCreateWithoutUserInput> | PendingCourseCreateWithoutUserInput[] | PendingCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PendingCourseCreateOrConnectWithoutUserInput | PendingCourseCreateOrConnectWithoutUserInput[]
    upsert?: PendingCourseUpsertWithWhereUniqueWithoutUserInput | PendingCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PendingCourseCreateManyUserInputEnvelope
    set?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    disconnect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    delete?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    connect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    update?: PendingCourseUpdateWithWhereUniqueWithoutUserInput | PendingCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PendingCourseUpdateManyWithWhereWithoutUserInput | PendingCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PendingCourseScalarWhereInput | PendingCourseScalarWhereInput[]
  }

  export type CompletedCourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutUserInput | CompletedCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutUserInput | CompletedCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutUserInput | CompletedCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type InProgressCourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InProgressCourseCreateWithoutUserInput, InProgressCourseUncheckedCreateWithoutUserInput> | InProgressCourseCreateWithoutUserInput[] | InProgressCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InProgressCourseCreateOrConnectWithoutUserInput | InProgressCourseCreateOrConnectWithoutUserInput[]
    upsert?: InProgressCourseUpsertWithWhereUniqueWithoutUserInput | InProgressCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InProgressCourseCreateManyUserInputEnvelope
    set?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    disconnect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    delete?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    connect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    update?: InProgressCourseUpdateWithWhereUniqueWithoutUserInput | InProgressCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InProgressCourseUpdateManyWithWhereWithoutUserInput | InProgressCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InProgressCourseScalarWhereInput | InProgressCourseScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput> | ClassCreateWithoutInstructorInput[] | ClassUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorInput | ClassCreateOrConnectWithoutInstructorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutInstructorInput | ClassUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: ClassCreateManyInstructorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutInstructorInput | ClassUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutInstructorInput | ClassUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type InterestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    upsert?: InterestUpsertWithWhereUniqueWithoutUserInput | InterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    set?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    disconnect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    delete?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    update?: InterestUpdateWithWhereUniqueWithoutUserInput | InterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterestUpdateManyWithWhereWithoutUserInput | InterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterestScalarWhereInput | InterestScalarWhereInput[]
  }

  export type ClassCreateNestedManyWithoutCourseInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type PrerequisiteCreateNestedManyWithoutCourseInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type PrerequisiteCreateNestedManyWithoutPrerequisiteCourseInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisiteCourseInput, PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput> | PrerequisiteCreateWithoutPrerequisiteCourseInput[] | PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisiteCourseInput | PrerequisiteCreateOrConnectWithoutPrerequisiteCourseInput[]
    createMany?: PrerequisiteCreateManyPrerequisiteCourseInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type PublishedCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<PublishedCourseCreateWithoutCourseInput, PublishedCourseUncheckedCreateWithoutCourseInput> | PublishedCourseCreateWithoutCourseInput[] | PublishedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PublishedCourseCreateOrConnectWithoutCourseInput | PublishedCourseCreateOrConnectWithoutCourseInput[]
    createMany?: PublishedCourseCreateManyCourseInputEnvelope
    connect?: PublishedCourseWhereUniqueInput | PublishedCourseWhereUniqueInput[]
  }

  export type PendingCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<PendingCourseCreateWithoutCourseInput, PendingCourseUncheckedCreateWithoutCourseInput> | PendingCourseCreateWithoutCourseInput[] | PendingCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PendingCourseCreateOrConnectWithoutCourseInput | PendingCourseCreateOrConnectWithoutCourseInput[]
    createMany?: PendingCourseCreateManyCourseInputEnvelope
    connect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type PrerequisiteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteCourseInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisiteCourseInput, PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput> | PrerequisiteCreateWithoutPrerequisiteCourseInput[] | PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisiteCourseInput | PrerequisiteCreateOrConnectWithoutPrerequisiteCourseInput[]
    createMany?: PrerequisiteCreateManyPrerequisiteCourseInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type PublishedCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<PublishedCourseCreateWithoutCourseInput, PublishedCourseUncheckedCreateWithoutCourseInput> | PublishedCourseCreateWithoutCourseInput[] | PublishedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PublishedCourseCreateOrConnectWithoutCourseInput | PublishedCourseCreateOrConnectWithoutCourseInput[]
    createMany?: PublishedCourseCreateManyCourseInputEnvelope
    connect?: PublishedCourseWhereUniqueInput | PublishedCourseWhereUniqueInput[]
  }

  export type PendingCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<PendingCourseCreateWithoutCourseInput, PendingCourseUncheckedCreateWithoutCourseInput> | PendingCourseCreateWithoutCourseInput[] | PendingCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PendingCourseCreateOrConnectWithoutCourseInput | PendingCourseCreateOrConnectWithoutCourseInput[]
    createMany?: PendingCourseCreateManyCourseInputEnvelope
    connect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
  }

  export type ClassUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutCourseInput | ClassUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutCourseInput | ClassUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutCourseInput | ClassUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type PrerequisiteUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutCourseInput | PrerequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutCourseInput | PrerequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutCourseInput | PrerequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type PrerequisiteUpdateManyWithoutPrerequisiteCourseNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisiteCourseInput, PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput> | PrerequisiteCreateWithoutPrerequisiteCourseInput[] | PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisiteCourseInput | PrerequisiteCreateOrConnectWithoutPrerequisiteCourseInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteCourseInput | PrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteCourseInput[]
    createMany?: PrerequisiteCreateManyPrerequisiteCourseInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteCourseInput | PrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteCourseInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutPrerequisiteCourseInput | PrerequisiteUpdateManyWithWhereWithoutPrerequisiteCourseInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type PublishedCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PublishedCourseCreateWithoutCourseInput, PublishedCourseUncheckedCreateWithoutCourseInput> | PublishedCourseCreateWithoutCourseInput[] | PublishedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PublishedCourseCreateOrConnectWithoutCourseInput | PublishedCourseCreateOrConnectWithoutCourseInput[]
    upsert?: PublishedCourseUpsertWithWhereUniqueWithoutCourseInput | PublishedCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PublishedCourseCreateManyCourseInputEnvelope
    set?: PublishedCourseWhereUniqueInput | PublishedCourseWhereUniqueInput[]
    disconnect?: PublishedCourseWhereUniqueInput | PublishedCourseWhereUniqueInput[]
    delete?: PublishedCourseWhereUniqueInput | PublishedCourseWhereUniqueInput[]
    connect?: PublishedCourseWhereUniqueInput | PublishedCourseWhereUniqueInput[]
    update?: PublishedCourseUpdateWithWhereUniqueWithoutCourseInput | PublishedCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PublishedCourseUpdateManyWithWhereWithoutCourseInput | PublishedCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PublishedCourseScalarWhereInput | PublishedCourseScalarWhereInput[]
  }

  export type PendingCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PendingCourseCreateWithoutCourseInput, PendingCourseUncheckedCreateWithoutCourseInput> | PendingCourseCreateWithoutCourseInput[] | PendingCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PendingCourseCreateOrConnectWithoutCourseInput | PendingCourseCreateOrConnectWithoutCourseInput[]
    upsert?: PendingCourseUpsertWithWhereUniqueWithoutCourseInput | PendingCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PendingCourseCreateManyCourseInputEnvelope
    set?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    disconnect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    delete?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    connect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    update?: PendingCourseUpdateWithWhereUniqueWithoutCourseInput | PendingCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PendingCourseUpdateManyWithWhereWithoutCourseInput | PendingCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PendingCourseScalarWhereInput | PendingCourseScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutCourseInput | ClassUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutCourseInput | ClassUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutCourseInput | ClassUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutCourseInput | PrerequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutCourseInput | PrerequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutCourseInput | PrerequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type PrerequisiteUncheckedUpdateManyWithoutPrerequisiteCourseNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisiteCourseInput, PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput> | PrerequisiteCreateWithoutPrerequisiteCourseInput[] | PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisiteCourseInput | PrerequisiteCreateOrConnectWithoutPrerequisiteCourseInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteCourseInput | PrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteCourseInput[]
    createMany?: PrerequisiteCreateManyPrerequisiteCourseInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteCourseInput | PrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteCourseInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutPrerequisiteCourseInput | PrerequisiteUpdateManyWithWhereWithoutPrerequisiteCourseInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type PublishedCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PublishedCourseCreateWithoutCourseInput, PublishedCourseUncheckedCreateWithoutCourseInput> | PublishedCourseCreateWithoutCourseInput[] | PublishedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PublishedCourseCreateOrConnectWithoutCourseInput | PublishedCourseCreateOrConnectWithoutCourseInput[]
    upsert?: PublishedCourseUpsertWithWhereUniqueWithoutCourseInput | PublishedCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PublishedCourseCreateManyCourseInputEnvelope
    set?: PublishedCourseWhereUniqueInput | PublishedCourseWhereUniqueInput[]
    disconnect?: PublishedCourseWhereUniqueInput | PublishedCourseWhereUniqueInput[]
    delete?: PublishedCourseWhereUniqueInput | PublishedCourseWhereUniqueInput[]
    connect?: PublishedCourseWhereUniqueInput | PublishedCourseWhereUniqueInput[]
    update?: PublishedCourseUpdateWithWhereUniqueWithoutCourseInput | PublishedCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PublishedCourseUpdateManyWithWhereWithoutCourseInput | PublishedCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PublishedCourseScalarWhereInput | PublishedCourseScalarWhereInput[]
  }

  export type PendingCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PendingCourseCreateWithoutCourseInput, PendingCourseUncheckedCreateWithoutCourseInput> | PendingCourseCreateWithoutCourseInput[] | PendingCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PendingCourseCreateOrConnectWithoutCourseInput | PendingCourseCreateOrConnectWithoutCourseInput[]
    upsert?: PendingCourseUpsertWithWhereUniqueWithoutCourseInput | PendingCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PendingCourseCreateManyCourseInputEnvelope
    set?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    disconnect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    delete?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    connect?: PendingCourseWhereUniqueInput | PendingCourseWhereUniqueInput[]
    update?: PendingCourseUpdateWithWhereUniqueWithoutCourseInput | PendingCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PendingCourseUpdateManyWithWhereWithoutCourseInput | PendingCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PendingCourseScalarWhereInput | PendingCourseScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutClassesInput = {
    create?: XOR<CourseCreateWithoutClassesInput, CourseUncheckedCreateWithoutClassesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutClassesInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClassesInput = {
    create?: XOR<UserCreateWithoutClassesInput, UserUncheckedCreateWithoutClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassesInput
    connect?: UserWhereUniqueInput
  }

  export type CompletedCourseCreateNestedManyWithoutClassInput = {
    create?: XOR<CompletedCourseCreateWithoutClassInput, CompletedCourseUncheckedCreateWithoutClassInput> | CompletedCourseCreateWithoutClassInput[] | CompletedCourseUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutClassInput | CompletedCourseCreateOrConnectWithoutClassInput[]
    createMany?: CompletedCourseCreateManyClassInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type InProgressCourseCreateNestedManyWithoutClassInput = {
    create?: XOR<InProgressCourseCreateWithoutClassInput, InProgressCourseUncheckedCreateWithoutClassInput> | InProgressCourseCreateWithoutClassInput[] | InProgressCourseUncheckedCreateWithoutClassInput[]
    connectOrCreate?: InProgressCourseCreateOrConnectWithoutClassInput | InProgressCourseCreateOrConnectWithoutClassInput[]
    createMany?: InProgressCourseCreateManyClassInputEnvelope
    connect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
  }

  export type CompletedCourseUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<CompletedCourseCreateWithoutClassInput, CompletedCourseUncheckedCreateWithoutClassInput> | CompletedCourseCreateWithoutClassInput[] | CompletedCourseUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutClassInput | CompletedCourseCreateOrConnectWithoutClassInput[]
    createMany?: CompletedCourseCreateManyClassInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type InProgressCourseUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<InProgressCourseCreateWithoutClassInput, InProgressCourseUncheckedCreateWithoutClassInput> | InProgressCourseCreateWithoutClassInput[] | InProgressCourseUncheckedCreateWithoutClassInput[]
    connectOrCreate?: InProgressCourseCreateOrConnectWithoutClassInput | InProgressCourseCreateOrConnectWithoutClassInput[]
    createMany?: InProgressCourseCreateManyClassInputEnvelope
    connect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<CourseCreateWithoutClassesInput, CourseUncheckedCreateWithoutClassesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutClassesInput
    upsert?: CourseUpsertWithoutClassesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutClassesInput, CourseUpdateWithoutClassesInput>, CourseUncheckedUpdateWithoutClassesInput>
  }

  export type UserUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<UserCreateWithoutClassesInput, UserUncheckedCreateWithoutClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassesInput
    upsert?: UserUpsertWithoutClassesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClassesInput, UserUpdateWithoutClassesInput>, UserUncheckedUpdateWithoutClassesInput>
  }

  export type CompletedCourseUpdateManyWithoutClassNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutClassInput, CompletedCourseUncheckedCreateWithoutClassInput> | CompletedCourseCreateWithoutClassInput[] | CompletedCourseUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutClassInput | CompletedCourseCreateOrConnectWithoutClassInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutClassInput | CompletedCourseUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: CompletedCourseCreateManyClassInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutClassInput | CompletedCourseUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutClassInput | CompletedCourseUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type InProgressCourseUpdateManyWithoutClassNestedInput = {
    create?: XOR<InProgressCourseCreateWithoutClassInput, InProgressCourseUncheckedCreateWithoutClassInput> | InProgressCourseCreateWithoutClassInput[] | InProgressCourseUncheckedCreateWithoutClassInput[]
    connectOrCreate?: InProgressCourseCreateOrConnectWithoutClassInput | InProgressCourseCreateOrConnectWithoutClassInput[]
    upsert?: InProgressCourseUpsertWithWhereUniqueWithoutClassInput | InProgressCourseUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: InProgressCourseCreateManyClassInputEnvelope
    set?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    disconnect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    delete?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    connect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    update?: InProgressCourseUpdateWithWhereUniqueWithoutClassInput | InProgressCourseUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: InProgressCourseUpdateManyWithWhereWithoutClassInput | InProgressCourseUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: InProgressCourseScalarWhereInput | InProgressCourseScalarWhereInput[]
  }

  export type CompletedCourseUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutClassInput, CompletedCourseUncheckedCreateWithoutClassInput> | CompletedCourseCreateWithoutClassInput[] | CompletedCourseUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutClassInput | CompletedCourseCreateOrConnectWithoutClassInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutClassInput | CompletedCourseUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: CompletedCourseCreateManyClassInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutClassInput | CompletedCourseUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutClassInput | CompletedCourseUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type InProgressCourseUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<InProgressCourseCreateWithoutClassInput, InProgressCourseUncheckedCreateWithoutClassInput> | InProgressCourseCreateWithoutClassInput[] | InProgressCourseUncheckedCreateWithoutClassInput[]
    connectOrCreate?: InProgressCourseCreateOrConnectWithoutClassInput | InProgressCourseCreateOrConnectWithoutClassInput[]
    upsert?: InProgressCourseUpsertWithWhereUniqueWithoutClassInput | InProgressCourseUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: InProgressCourseCreateManyClassInputEnvelope
    set?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    disconnect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    delete?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    connect?: InProgressCourseWhereUniqueInput | InProgressCourseWhereUniqueInput[]
    update?: InProgressCourseUpdateWithWhereUniqueWithoutClassInput | InProgressCourseUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: InProgressCourseUpdateManyWithWhereWithoutClassInput | InProgressCourseUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: InProgressCourseScalarWhereInput | InProgressCourseScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutPrerequisitesInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutRequiredByInput = {
    create?: XOR<CourseCreateWithoutRequiredByInput, CourseUncheckedCreateWithoutRequiredByInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRequiredByInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutPrerequisitesNestedInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput
    upsert?: CourseUpsertWithoutPrerequisitesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPrerequisitesInput, CourseUpdateWithoutPrerequisitesInput>, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type CourseUpdateOneRequiredWithoutRequiredByNestedInput = {
    create?: XOR<CourseCreateWithoutRequiredByInput, CourseUncheckedCreateWithoutRequiredByInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRequiredByInput
    upsert?: CourseUpsertWithoutRequiredByInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRequiredByInput, CourseUpdateWithoutRequiredByInput>, CourseUncheckedUpdateWithoutRequiredByInput>
  }

  export type ClassCreateNestedOneWithoutCompletedByInput = {
    create?: XOR<ClassCreateWithoutCompletedByInput, ClassUncheckedCreateWithoutCompletedByInput>
    connectOrCreate?: ClassCreateOrConnectWithoutCompletedByInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCompletedCoursesInput = {
    create?: XOR<UserCreateWithoutCompletedCoursesInput, UserUncheckedCreateWithoutCompletedCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClassUpdateOneRequiredWithoutCompletedByNestedInput = {
    create?: XOR<ClassCreateWithoutCompletedByInput, ClassUncheckedCreateWithoutCompletedByInput>
    connectOrCreate?: ClassCreateOrConnectWithoutCompletedByInput
    upsert?: ClassUpsertWithoutCompletedByInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutCompletedByInput, ClassUpdateWithoutCompletedByInput>, ClassUncheckedUpdateWithoutCompletedByInput>
  }

  export type UserUpdateOneRequiredWithoutCompletedCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCompletedCoursesInput, UserUncheckedCreateWithoutCompletedCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedCoursesInput
    upsert?: UserUpsertWithoutCompletedCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompletedCoursesInput, UserUpdateWithoutCompletedCoursesInput>, UserUncheckedUpdateWithoutCompletedCoursesInput>
  }

  export type ClassCreateNestedOneWithoutInProgressByInput = {
    create?: XOR<ClassCreateWithoutInProgressByInput, ClassUncheckedCreateWithoutInProgressByInput>
    connectOrCreate?: ClassCreateOrConnectWithoutInProgressByInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInprogressCoursesInput = {
    create?: XOR<UserCreateWithoutInprogressCoursesInput, UserUncheckedCreateWithoutInprogressCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInprogressCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type ClassUpdateOneRequiredWithoutInProgressByNestedInput = {
    create?: XOR<ClassCreateWithoutInProgressByInput, ClassUncheckedCreateWithoutInProgressByInput>
    connectOrCreate?: ClassCreateOrConnectWithoutInProgressByInput
    upsert?: ClassUpsertWithoutInProgressByInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutInProgressByInput, ClassUpdateWithoutInProgressByInput>, ClassUncheckedUpdateWithoutInProgressByInput>
  }

  export type UserUpdateOneRequiredWithoutInprogressCoursesNestedInput = {
    create?: XOR<UserCreateWithoutInprogressCoursesInput, UserUncheckedCreateWithoutInprogressCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInprogressCoursesInput
    upsert?: UserUpsertWithoutInprogressCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInprogressCoursesInput, UserUpdateWithoutInprogressCoursesInput>, UserUncheckedUpdateWithoutInprogressCoursesInput>
  }

  export type CourseCreateNestedOneWithoutPendingByInput = {
    create?: XOR<CourseCreateWithoutPendingByInput, CourseUncheckedCreateWithoutPendingByInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPendingByInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPendingCoursesInput = {
    create?: XOR<UserCreateWithoutPendingCoursesInput, UserUncheckedCreateWithoutPendingCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPendingCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutPendingByNestedInput = {
    create?: XOR<CourseCreateWithoutPendingByInput, CourseUncheckedCreateWithoutPendingByInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPendingByInput
    upsert?: CourseUpsertWithoutPendingByInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPendingByInput, CourseUpdateWithoutPendingByInput>, CourseUncheckedUpdateWithoutPendingByInput>
  }

  export type UserUpdateOneRequiredWithoutPendingCoursesNestedInput = {
    create?: XOR<UserCreateWithoutPendingCoursesInput, UserUncheckedCreateWithoutPendingCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPendingCoursesInput
    upsert?: UserUpsertWithoutPendingCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPendingCoursesInput, UserUpdateWithoutPendingCoursesInput>, UserUncheckedUpdateWithoutPendingCoursesInput>
  }

  export type CourseCreateNestedOneWithoutPublishedCoursesInput = {
    create?: XOR<CourseCreateWithoutPublishedCoursesInput, CourseUncheckedCreateWithoutPublishedCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPublishedCoursesInput
    connect?: CourseWhereUniqueInput
  }

  export type InterestCreateNestedManyWithoutPublishedCourseInput = {
    create?: XOR<InterestCreateWithoutPublishedCourseInput, InterestUncheckedCreateWithoutPublishedCourseInput> | InterestCreateWithoutPublishedCourseInput[] | InterestUncheckedCreateWithoutPublishedCourseInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutPublishedCourseInput | InterestCreateOrConnectWithoutPublishedCourseInput[]
    createMany?: InterestCreateManyPublishedCourseInputEnvelope
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
  }

  export type InterestUncheckedCreateNestedManyWithoutPublishedCourseInput = {
    create?: XOR<InterestCreateWithoutPublishedCourseInput, InterestUncheckedCreateWithoutPublishedCourseInput> | InterestCreateWithoutPublishedCourseInput[] | InterestUncheckedCreateWithoutPublishedCourseInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutPublishedCourseInput | InterestCreateOrConnectWithoutPublishedCourseInput[]
    createMany?: InterestCreateManyPublishedCourseInputEnvelope
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseUpdateOneRequiredWithoutPublishedCoursesNestedInput = {
    create?: XOR<CourseCreateWithoutPublishedCoursesInput, CourseUncheckedCreateWithoutPublishedCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPublishedCoursesInput
    upsert?: CourseUpsertWithoutPublishedCoursesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPublishedCoursesInput, CourseUpdateWithoutPublishedCoursesInput>, CourseUncheckedUpdateWithoutPublishedCoursesInput>
  }

  export type InterestUpdateManyWithoutPublishedCourseNestedInput = {
    create?: XOR<InterestCreateWithoutPublishedCourseInput, InterestUncheckedCreateWithoutPublishedCourseInput> | InterestCreateWithoutPublishedCourseInput[] | InterestUncheckedCreateWithoutPublishedCourseInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutPublishedCourseInput | InterestCreateOrConnectWithoutPublishedCourseInput[]
    upsert?: InterestUpsertWithWhereUniqueWithoutPublishedCourseInput | InterestUpsertWithWhereUniqueWithoutPublishedCourseInput[]
    createMany?: InterestCreateManyPublishedCourseInputEnvelope
    set?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    disconnect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    delete?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    update?: InterestUpdateWithWhereUniqueWithoutPublishedCourseInput | InterestUpdateWithWhereUniqueWithoutPublishedCourseInput[]
    updateMany?: InterestUpdateManyWithWhereWithoutPublishedCourseInput | InterestUpdateManyWithWhereWithoutPublishedCourseInput[]
    deleteMany?: InterestScalarWhereInput | InterestScalarWhereInput[]
  }

  export type InterestUncheckedUpdateManyWithoutPublishedCourseNestedInput = {
    create?: XOR<InterestCreateWithoutPublishedCourseInput, InterestUncheckedCreateWithoutPublishedCourseInput> | InterestCreateWithoutPublishedCourseInput[] | InterestUncheckedCreateWithoutPublishedCourseInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutPublishedCourseInput | InterestCreateOrConnectWithoutPublishedCourseInput[]
    upsert?: InterestUpsertWithWhereUniqueWithoutPublishedCourseInput | InterestUpsertWithWhereUniqueWithoutPublishedCourseInput[]
    createMany?: InterestCreateManyPublishedCourseInputEnvelope
    set?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    disconnect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    delete?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    update?: InterestUpdateWithWhereUniqueWithoutPublishedCourseInput | InterestUpdateWithWhereUniqueWithoutPublishedCourseInput[]
    updateMany?: InterestUpdateManyWithWhereWithoutPublishedCourseInput | InterestUpdateManyWithWhereWithoutPublishedCourseInput[]
    deleteMany?: InterestScalarWhereInput | InterestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInterestsInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    connect?: UserWhereUniqueInput
  }

  export type PublishedCourseCreateNestedOneWithoutInterestsInput = {
    create?: XOR<PublishedCourseCreateWithoutInterestsInput, PublishedCourseUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: PublishedCourseCreateOrConnectWithoutInterestsInput
    connect?: PublishedCourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    upsert?: UserUpsertWithoutInterestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterestsInput, UserUpdateWithoutInterestsInput>, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type PublishedCourseUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<PublishedCourseCreateWithoutInterestsInput, PublishedCourseUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: PublishedCourseCreateOrConnectWithoutInterestsInput
    upsert?: PublishedCourseUpsertWithoutInterestsInput
    connect?: PublishedCourseWhereUniqueInput
    update?: XOR<XOR<PublishedCourseUpdateToOneWithWhereWithoutInterestsInput, PublishedCourseUpdateWithoutInterestsInput>, PublishedCourseUncheckedUpdateWithoutInterestsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PendingCourseCreateWithoutUserInput = {
    course: CourseCreateNestedOneWithoutPendingByInput
  }

  export type PendingCourseUncheckedCreateWithoutUserInput = {
    id?: number
    courseId: number
  }

  export type PendingCourseCreateOrConnectWithoutUserInput = {
    where: PendingCourseWhereUniqueInput
    create: XOR<PendingCourseCreateWithoutUserInput, PendingCourseUncheckedCreateWithoutUserInput>
  }

  export type PendingCourseCreateManyUserInputEnvelope = {
    data: PendingCourseCreateManyUserInput | PendingCourseCreateManyUserInput[]
  }

  export type CompletedCourseCreateWithoutUserInput = {
    grade?: string | null
    class: ClassCreateNestedOneWithoutCompletedByInput
  }

  export type CompletedCourseUncheckedCreateWithoutUserInput = {
    id?: number
    classId: number
    grade?: string | null
  }

  export type CompletedCourseCreateOrConnectWithoutUserInput = {
    where: CompletedCourseWhereUniqueInput
    create: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput>
  }

  export type CompletedCourseCreateManyUserInputEnvelope = {
    data: CompletedCourseCreateManyUserInput | CompletedCourseCreateManyUserInput[]
  }

  export type InProgressCourseCreateWithoutUserInput = {
    grade?: string | null
    class: ClassCreateNestedOneWithoutInProgressByInput
  }

  export type InProgressCourseUncheckedCreateWithoutUserInput = {
    id?: number
    classId: number
    grade?: string | null
  }

  export type InProgressCourseCreateOrConnectWithoutUserInput = {
    where: InProgressCourseWhereUniqueInput
    create: XOR<InProgressCourseCreateWithoutUserInput, InProgressCourseUncheckedCreateWithoutUserInput>
  }

  export type InProgressCourseCreateManyUserInputEnvelope = {
    data: InProgressCourseCreateManyUserInput | InProgressCourseCreateManyUserInput[]
  }

  export type ClassCreateWithoutInstructorInput = {
    semester: string
    year: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    course: CourseCreateNestedOneWithoutClassesInput
    completedBy?: CompletedCourseCreateNestedManyWithoutClassInput
    inProgressBy?: InProgressCourseCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutInstructorInput = {
    id?: number
    courseId: number
    semester: string
    year: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    completedBy?: CompletedCourseUncheckedCreateNestedManyWithoutClassInput
    inProgressBy?: InProgressCourseUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutInstructorInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput>
  }

  export type ClassCreateManyInstructorInputEnvelope = {
    data: ClassCreateManyInstructorInput | ClassCreateManyInstructorInput[]
  }

  export type InterestCreateWithoutUserInput = {
    status: string
    publishedCourse: PublishedCourseCreateNestedOneWithoutInterestsInput
  }

  export type InterestUncheckedCreateWithoutUserInput = {
    id?: number
    publishedCourseId: number
    status: string
  }

  export type InterestCreateOrConnectWithoutUserInput = {
    where: InterestWhereUniqueInput
    create: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput>
  }

  export type InterestCreateManyUserInputEnvelope = {
    data: InterestCreateManyUserInput | InterestCreateManyUserInput[]
  }

  export type PendingCourseUpsertWithWhereUniqueWithoutUserInput = {
    where: PendingCourseWhereUniqueInput
    update: XOR<PendingCourseUpdateWithoutUserInput, PendingCourseUncheckedUpdateWithoutUserInput>
    create: XOR<PendingCourseCreateWithoutUserInput, PendingCourseUncheckedCreateWithoutUserInput>
  }

  export type PendingCourseUpdateWithWhereUniqueWithoutUserInput = {
    where: PendingCourseWhereUniqueInput
    data: XOR<PendingCourseUpdateWithoutUserInput, PendingCourseUncheckedUpdateWithoutUserInput>
  }

  export type PendingCourseUpdateManyWithWhereWithoutUserInput = {
    where: PendingCourseScalarWhereInput
    data: XOR<PendingCourseUpdateManyMutationInput, PendingCourseUncheckedUpdateManyWithoutUserInput>
  }

  export type PendingCourseScalarWhereInput = {
    AND?: PendingCourseScalarWhereInput | PendingCourseScalarWhereInput[]
    OR?: PendingCourseScalarWhereInput[]
    NOT?: PendingCourseScalarWhereInput | PendingCourseScalarWhereInput[]
    id?: IntFilter<"PendingCourse"> | number
    courseId?: IntFilter<"PendingCourse"> | number
    userId?: IntFilter<"PendingCourse"> | number
  }

  export type CompletedCourseUpsertWithWhereUniqueWithoutUserInput = {
    where: CompletedCourseWhereUniqueInput
    update: XOR<CompletedCourseUpdateWithoutUserInput, CompletedCourseUncheckedUpdateWithoutUserInput>
    create: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput>
  }

  export type CompletedCourseUpdateWithWhereUniqueWithoutUserInput = {
    where: CompletedCourseWhereUniqueInput
    data: XOR<CompletedCourseUpdateWithoutUserInput, CompletedCourseUncheckedUpdateWithoutUserInput>
  }

  export type CompletedCourseUpdateManyWithWhereWithoutUserInput = {
    where: CompletedCourseScalarWhereInput
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyWithoutUserInput>
  }

  export type CompletedCourseScalarWhereInput = {
    AND?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
    OR?: CompletedCourseScalarWhereInput[]
    NOT?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
    id?: IntFilter<"CompletedCourse"> | number
    classId?: IntFilter<"CompletedCourse"> | number
    userId?: IntFilter<"CompletedCourse"> | number
    grade?: StringNullableFilter<"CompletedCourse"> | string | null
  }

  export type InProgressCourseUpsertWithWhereUniqueWithoutUserInput = {
    where: InProgressCourseWhereUniqueInput
    update: XOR<InProgressCourseUpdateWithoutUserInput, InProgressCourseUncheckedUpdateWithoutUserInput>
    create: XOR<InProgressCourseCreateWithoutUserInput, InProgressCourseUncheckedCreateWithoutUserInput>
  }

  export type InProgressCourseUpdateWithWhereUniqueWithoutUserInput = {
    where: InProgressCourseWhereUniqueInput
    data: XOR<InProgressCourseUpdateWithoutUserInput, InProgressCourseUncheckedUpdateWithoutUserInput>
  }

  export type InProgressCourseUpdateManyWithWhereWithoutUserInput = {
    where: InProgressCourseScalarWhereInput
    data: XOR<InProgressCourseUpdateManyMutationInput, InProgressCourseUncheckedUpdateManyWithoutUserInput>
  }

  export type InProgressCourseScalarWhereInput = {
    AND?: InProgressCourseScalarWhereInput | InProgressCourseScalarWhereInput[]
    OR?: InProgressCourseScalarWhereInput[]
    NOT?: InProgressCourseScalarWhereInput | InProgressCourseScalarWhereInput[]
    id?: IntFilter<"InProgressCourse"> | number
    classId?: IntFilter<"InProgressCourse"> | number
    userId?: IntFilter<"InProgressCourse"> | number
    grade?: StringNullableFilter<"InProgressCourse"> | string | null
  }

  export type ClassUpsertWithWhereUniqueWithoutInstructorInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutInstructorInput, ClassUncheckedUpdateWithoutInstructorInput>
    create: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutInstructorInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutInstructorInput, ClassUncheckedUpdateWithoutInstructorInput>
  }

  export type ClassUpdateManyWithWhereWithoutInstructorInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutInstructorInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: IntFilter<"Class"> | number
    courseId?: IntFilter<"Class"> | number
    semester?: StringFilter<"Class"> | string
    year?: IntFilter<"Class"> | number
    userId?: IntFilter<"Class"> | number
    availableSeats?: IntFilter<"Class"> | number
    studentEnrolled?: IntFilter<"Class"> | number
    isValidated?: IntFilter<"Class"> | number
    time?: StringFilter<"Class"> | string
  }

  export type InterestUpsertWithWhereUniqueWithoutUserInput = {
    where: InterestWhereUniqueInput
    update: XOR<InterestUpdateWithoutUserInput, InterestUncheckedUpdateWithoutUserInput>
    create: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput>
  }

  export type InterestUpdateWithWhereUniqueWithoutUserInput = {
    where: InterestWhereUniqueInput
    data: XOR<InterestUpdateWithoutUserInput, InterestUncheckedUpdateWithoutUserInput>
  }

  export type InterestUpdateManyWithWhereWithoutUserInput = {
    where: InterestScalarWhereInput
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyWithoutUserInput>
  }

  export type InterestScalarWhereInput = {
    AND?: InterestScalarWhereInput | InterestScalarWhereInput[]
    OR?: InterestScalarWhereInput[]
    NOT?: InterestScalarWhereInput | InterestScalarWhereInput[]
    id?: IntFilter<"Interest"> | number
    userId?: IntFilter<"Interest"> | number
    publishedCourseId?: IntFilter<"Interest"> | number
    status?: StringFilter<"Interest"> | string
  }

  export type ClassCreateWithoutCourseInput = {
    semester: string
    year: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    instructor: UserCreateNestedOneWithoutClassesInput
    completedBy?: CompletedCourseCreateNestedManyWithoutClassInput
    inProgressBy?: InProgressCourseCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutCourseInput = {
    id?: number
    semester: string
    year: number
    userId: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    completedBy?: CompletedCourseUncheckedCreateNestedManyWithoutClassInput
    inProgressBy?: InProgressCourseUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutCourseInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput>
  }

  export type ClassCreateManyCourseInputEnvelope = {
    data: ClassCreateManyCourseInput | ClassCreateManyCourseInput[]
  }

  export type PrerequisiteCreateWithoutCourseInput = {
    prerequisiteCourse: CourseCreateNestedOneWithoutRequiredByInput
  }

  export type PrerequisiteUncheckedCreateWithoutCourseInput = {
    id?: number
    prerequisiteCourseId: number
  }

  export type PrerequisiteCreateOrConnectWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    create: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput>
  }

  export type PrerequisiteCreateManyCourseInputEnvelope = {
    data: PrerequisiteCreateManyCourseInput | PrerequisiteCreateManyCourseInput[]
  }

  export type PrerequisiteCreateWithoutPrerequisiteCourseInput = {
    course: CourseCreateNestedOneWithoutPrerequisitesInput
  }

  export type PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput = {
    id?: number
    courseId: number
  }

  export type PrerequisiteCreateOrConnectWithoutPrerequisiteCourseInput = {
    where: PrerequisiteWhereUniqueInput
    create: XOR<PrerequisiteCreateWithoutPrerequisiteCourseInput, PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput>
  }

  export type PrerequisiteCreateManyPrerequisiteCourseInputEnvelope = {
    data: PrerequisiteCreateManyPrerequisiteCourseInput | PrerequisiteCreateManyPrerequisiteCourseInput[]
  }

  export type PublishedCourseCreateWithoutCourseInput = {
    semester: string
    year: number
    deadline: Date | string
    interests?: InterestCreateNestedManyWithoutPublishedCourseInput
  }

  export type PublishedCourseUncheckedCreateWithoutCourseInput = {
    id?: number
    semester: string
    year: number
    deadline: Date | string
    interests?: InterestUncheckedCreateNestedManyWithoutPublishedCourseInput
  }

  export type PublishedCourseCreateOrConnectWithoutCourseInput = {
    where: PublishedCourseWhereUniqueInput
    create: XOR<PublishedCourseCreateWithoutCourseInput, PublishedCourseUncheckedCreateWithoutCourseInput>
  }

  export type PublishedCourseCreateManyCourseInputEnvelope = {
    data: PublishedCourseCreateManyCourseInput | PublishedCourseCreateManyCourseInput[]
  }

  export type PendingCourseCreateWithoutCourseInput = {
    user: UserCreateNestedOneWithoutPendingCoursesInput
  }

  export type PendingCourseUncheckedCreateWithoutCourseInput = {
    id?: number
    userId: number
  }

  export type PendingCourseCreateOrConnectWithoutCourseInput = {
    where: PendingCourseWhereUniqueInput
    create: XOR<PendingCourseCreateWithoutCourseInput, PendingCourseUncheckedCreateWithoutCourseInput>
  }

  export type PendingCourseCreateManyCourseInputEnvelope = {
    data: PendingCourseCreateManyCourseInput | PendingCourseCreateManyCourseInput[]
  }

  export type ClassUpsertWithWhereUniqueWithoutCourseInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutCourseInput, ClassUncheckedUpdateWithoutCourseInput>
    create: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutCourseInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutCourseInput, ClassUncheckedUpdateWithoutCourseInput>
  }

  export type ClassUpdateManyWithWhereWithoutCourseInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutCourseInput>
  }

  export type PrerequisiteUpsertWithWhereUniqueWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    update: XOR<PrerequisiteUpdateWithoutCourseInput, PrerequisiteUncheckedUpdateWithoutCourseInput>
    create: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput>
  }

  export type PrerequisiteUpdateWithWhereUniqueWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    data: XOR<PrerequisiteUpdateWithoutCourseInput, PrerequisiteUncheckedUpdateWithoutCourseInput>
  }

  export type PrerequisiteUpdateManyWithWhereWithoutCourseInput = {
    where: PrerequisiteScalarWhereInput
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyWithoutCourseInput>
  }

  export type PrerequisiteScalarWhereInput = {
    AND?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
    OR?: PrerequisiteScalarWhereInput[]
    NOT?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
    id?: IntFilter<"Prerequisite"> | number
    courseId?: IntFilter<"Prerequisite"> | number
    prerequisiteCourseId?: IntFilter<"Prerequisite"> | number
  }

  export type PrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteCourseInput = {
    where: PrerequisiteWhereUniqueInput
    update: XOR<PrerequisiteUpdateWithoutPrerequisiteCourseInput, PrerequisiteUncheckedUpdateWithoutPrerequisiteCourseInput>
    create: XOR<PrerequisiteCreateWithoutPrerequisiteCourseInput, PrerequisiteUncheckedCreateWithoutPrerequisiteCourseInput>
  }

  export type PrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteCourseInput = {
    where: PrerequisiteWhereUniqueInput
    data: XOR<PrerequisiteUpdateWithoutPrerequisiteCourseInput, PrerequisiteUncheckedUpdateWithoutPrerequisiteCourseInput>
  }

  export type PrerequisiteUpdateManyWithWhereWithoutPrerequisiteCourseInput = {
    where: PrerequisiteScalarWhereInput
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyWithoutPrerequisiteCourseInput>
  }

  export type PublishedCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: PublishedCourseWhereUniqueInput
    update: XOR<PublishedCourseUpdateWithoutCourseInput, PublishedCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<PublishedCourseCreateWithoutCourseInput, PublishedCourseUncheckedCreateWithoutCourseInput>
  }

  export type PublishedCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: PublishedCourseWhereUniqueInput
    data: XOR<PublishedCourseUpdateWithoutCourseInput, PublishedCourseUncheckedUpdateWithoutCourseInput>
  }

  export type PublishedCourseUpdateManyWithWhereWithoutCourseInput = {
    where: PublishedCourseScalarWhereInput
    data: XOR<PublishedCourseUpdateManyMutationInput, PublishedCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type PublishedCourseScalarWhereInput = {
    AND?: PublishedCourseScalarWhereInput | PublishedCourseScalarWhereInput[]
    OR?: PublishedCourseScalarWhereInput[]
    NOT?: PublishedCourseScalarWhereInput | PublishedCourseScalarWhereInput[]
    id?: IntFilter<"PublishedCourse"> | number
    courseId?: IntFilter<"PublishedCourse"> | number
    semester?: StringFilter<"PublishedCourse"> | string
    year?: IntFilter<"PublishedCourse"> | number
    deadline?: DateTimeFilter<"PublishedCourse"> | Date | string
  }

  export type PendingCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: PendingCourseWhereUniqueInput
    update: XOR<PendingCourseUpdateWithoutCourseInput, PendingCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<PendingCourseCreateWithoutCourseInput, PendingCourseUncheckedCreateWithoutCourseInput>
  }

  export type PendingCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: PendingCourseWhereUniqueInput
    data: XOR<PendingCourseUpdateWithoutCourseInput, PendingCourseUncheckedUpdateWithoutCourseInput>
  }

  export type PendingCourseUpdateManyWithWhereWithoutCourseInput = {
    where: PendingCourseScalarWhereInput
    data: XOR<PendingCourseUpdateManyMutationInput, PendingCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutClassesInput = {
    code: string
    name: string
    category: string
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    requiredBy?: PrerequisiteCreateNestedManyWithoutPrerequisiteCourseInput
    publishedCourses?: PublishedCourseCreateNestedManyWithoutCourseInput
    pendingBy?: PendingCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutClassesInput = {
    id?: number
    code: string
    name: string
    category: string
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    requiredBy?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteCourseInput
    publishedCourses?: PublishedCourseUncheckedCreateNestedManyWithoutCourseInput
    pendingBy?: PendingCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutClassesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutClassesInput, CourseUncheckedCreateWithoutClassesInput>
  }

  export type UserCreateWithoutClassesInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    pendingCourses?: PendingCourseCreateNestedManyWithoutUserInput
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    inprogressCourses?: InProgressCourseCreateNestedManyWithoutUserInput
    interests?: InterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClassesInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    pendingCourses?: PendingCourseUncheckedCreateNestedManyWithoutUserInput
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    inprogressCourses?: InProgressCourseUncheckedCreateNestedManyWithoutUserInput
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClassesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClassesInput, UserUncheckedCreateWithoutClassesInput>
  }

  export type CompletedCourseCreateWithoutClassInput = {
    grade?: string | null
    user: UserCreateNestedOneWithoutCompletedCoursesInput
  }

  export type CompletedCourseUncheckedCreateWithoutClassInput = {
    id?: number
    userId: number
    grade?: string | null
  }

  export type CompletedCourseCreateOrConnectWithoutClassInput = {
    where: CompletedCourseWhereUniqueInput
    create: XOR<CompletedCourseCreateWithoutClassInput, CompletedCourseUncheckedCreateWithoutClassInput>
  }

  export type CompletedCourseCreateManyClassInputEnvelope = {
    data: CompletedCourseCreateManyClassInput | CompletedCourseCreateManyClassInput[]
  }

  export type InProgressCourseCreateWithoutClassInput = {
    grade?: string | null
    user: UserCreateNestedOneWithoutInprogressCoursesInput
  }

  export type InProgressCourseUncheckedCreateWithoutClassInput = {
    id?: number
    userId: number
    grade?: string | null
  }

  export type InProgressCourseCreateOrConnectWithoutClassInput = {
    where: InProgressCourseWhereUniqueInput
    create: XOR<InProgressCourseCreateWithoutClassInput, InProgressCourseUncheckedCreateWithoutClassInput>
  }

  export type InProgressCourseCreateManyClassInputEnvelope = {
    data: InProgressCourseCreateManyClassInput | InProgressCourseCreateManyClassInput[]
  }

  export type CourseUpsertWithoutClassesInput = {
    update: XOR<CourseUpdateWithoutClassesInput, CourseUncheckedUpdateWithoutClassesInput>
    create: XOR<CourseCreateWithoutClassesInput, CourseUncheckedCreateWithoutClassesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutClassesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutClassesInput, CourseUncheckedUpdateWithoutClassesInput>
  }

  export type CourseUpdateWithoutClassesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    requiredBy?: PrerequisiteUpdateManyWithoutPrerequisiteCourseNestedInput
    publishedCourses?: PublishedCourseUpdateManyWithoutCourseNestedInput
    pendingBy?: PendingCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    requiredBy?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteCourseNestedInput
    publishedCourses?: PublishedCourseUncheckedUpdateManyWithoutCourseNestedInput
    pendingBy?: PendingCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutClassesInput = {
    update: XOR<UserUpdateWithoutClassesInput, UserUncheckedUpdateWithoutClassesInput>
    create: XOR<UserCreateWithoutClassesInput, UserUncheckedCreateWithoutClassesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClassesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClassesInput, UserUncheckedUpdateWithoutClassesInput>
  }

  export type UserUpdateWithoutClassesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pendingCourses?: PendingCourseUpdateManyWithoutUserNestedInput
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    inprogressCourses?: InProgressCourseUpdateManyWithoutUserNestedInput
    interests?: InterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pendingCourses?: PendingCourseUncheckedUpdateManyWithoutUserNestedInput
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    inprogressCourses?: InProgressCourseUncheckedUpdateManyWithoutUserNestedInput
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompletedCourseUpsertWithWhereUniqueWithoutClassInput = {
    where: CompletedCourseWhereUniqueInput
    update: XOR<CompletedCourseUpdateWithoutClassInput, CompletedCourseUncheckedUpdateWithoutClassInput>
    create: XOR<CompletedCourseCreateWithoutClassInput, CompletedCourseUncheckedCreateWithoutClassInput>
  }

  export type CompletedCourseUpdateWithWhereUniqueWithoutClassInput = {
    where: CompletedCourseWhereUniqueInput
    data: XOR<CompletedCourseUpdateWithoutClassInput, CompletedCourseUncheckedUpdateWithoutClassInput>
  }

  export type CompletedCourseUpdateManyWithWhereWithoutClassInput = {
    where: CompletedCourseScalarWhereInput
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyWithoutClassInput>
  }

  export type InProgressCourseUpsertWithWhereUniqueWithoutClassInput = {
    where: InProgressCourseWhereUniqueInput
    update: XOR<InProgressCourseUpdateWithoutClassInput, InProgressCourseUncheckedUpdateWithoutClassInput>
    create: XOR<InProgressCourseCreateWithoutClassInput, InProgressCourseUncheckedCreateWithoutClassInput>
  }

  export type InProgressCourseUpdateWithWhereUniqueWithoutClassInput = {
    where: InProgressCourseWhereUniqueInput
    data: XOR<InProgressCourseUpdateWithoutClassInput, InProgressCourseUncheckedUpdateWithoutClassInput>
  }

  export type InProgressCourseUpdateManyWithWhereWithoutClassInput = {
    where: InProgressCourseScalarWhereInput
    data: XOR<InProgressCourseUpdateManyMutationInput, InProgressCourseUncheckedUpdateManyWithoutClassInput>
  }

  export type CourseCreateWithoutPrerequisitesInput = {
    code: string
    name: string
    category: string
    classes?: ClassCreateNestedManyWithoutCourseInput
    requiredBy?: PrerequisiteCreateNestedManyWithoutPrerequisiteCourseInput
    publishedCourses?: PublishedCourseCreateNestedManyWithoutCourseInput
    pendingBy?: PendingCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPrerequisitesInput = {
    id?: number
    code: string
    name: string
    category: string
    classes?: ClassUncheckedCreateNestedManyWithoutCourseInput
    requiredBy?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteCourseInput
    publishedCourses?: PublishedCourseUncheckedCreateNestedManyWithoutCourseInput
    pendingBy?: PendingCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPrerequisitesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
  }

  export type CourseCreateWithoutRequiredByInput = {
    code: string
    name: string
    category: string
    classes?: ClassCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    publishedCourses?: PublishedCourseCreateNestedManyWithoutCourseInput
    pendingBy?: PendingCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutRequiredByInput = {
    id?: number
    code: string
    name: string
    category: string
    classes?: ClassUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    publishedCourses?: PublishedCourseUncheckedCreateNestedManyWithoutCourseInput
    pendingBy?: PendingCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutRequiredByInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRequiredByInput, CourseUncheckedCreateWithoutRequiredByInput>
  }

  export type CourseUpsertWithoutPrerequisitesInput = {
    update: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPrerequisitesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type CourseUpdateWithoutPrerequisitesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    classes?: ClassUpdateManyWithoutCourseNestedInput
    requiredBy?: PrerequisiteUpdateManyWithoutPrerequisiteCourseNestedInput
    publishedCourses?: PublishedCourseUpdateManyWithoutCourseNestedInput
    pendingBy?: PendingCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPrerequisitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    classes?: ClassUncheckedUpdateManyWithoutCourseNestedInput
    requiredBy?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteCourseNestedInput
    publishedCourses?: PublishedCourseUncheckedUpdateManyWithoutCourseNestedInput
    pendingBy?: PendingCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUpsertWithoutRequiredByInput = {
    update: XOR<CourseUpdateWithoutRequiredByInput, CourseUncheckedUpdateWithoutRequiredByInput>
    create: XOR<CourseCreateWithoutRequiredByInput, CourseUncheckedCreateWithoutRequiredByInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRequiredByInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRequiredByInput, CourseUncheckedUpdateWithoutRequiredByInput>
  }

  export type CourseUpdateWithoutRequiredByInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    classes?: ClassUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    publishedCourses?: PublishedCourseUpdateManyWithoutCourseNestedInput
    pendingBy?: PendingCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutRequiredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    classes?: ClassUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    publishedCourses?: PublishedCourseUncheckedUpdateManyWithoutCourseNestedInput
    pendingBy?: PendingCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type ClassCreateWithoutCompletedByInput = {
    semester: string
    year: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    course: CourseCreateNestedOneWithoutClassesInput
    instructor: UserCreateNestedOneWithoutClassesInput
    inProgressBy?: InProgressCourseCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutCompletedByInput = {
    id?: number
    courseId: number
    semester: string
    year: number
    userId: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    inProgressBy?: InProgressCourseUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutCompletedByInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutCompletedByInput, ClassUncheckedCreateWithoutCompletedByInput>
  }

  export type UserCreateWithoutCompletedCoursesInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    pendingCourses?: PendingCourseCreateNestedManyWithoutUserInput
    inprogressCourses?: InProgressCourseCreateNestedManyWithoutUserInput
    classes?: ClassCreateNestedManyWithoutInstructorInput
    interests?: InterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompletedCoursesInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    pendingCourses?: PendingCourseUncheckedCreateNestedManyWithoutUserInput
    inprogressCourses?: InProgressCourseUncheckedCreateNestedManyWithoutUserInput
    classes?: ClassUncheckedCreateNestedManyWithoutInstructorInput
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompletedCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompletedCoursesInput, UserUncheckedCreateWithoutCompletedCoursesInput>
  }

  export type ClassUpsertWithoutCompletedByInput = {
    update: XOR<ClassUpdateWithoutCompletedByInput, ClassUncheckedUpdateWithoutCompletedByInput>
    create: XOR<ClassCreateWithoutCompletedByInput, ClassUncheckedCreateWithoutCompletedByInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutCompletedByInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutCompletedByInput, ClassUncheckedUpdateWithoutCompletedByInput>
  }

  export type ClassUpdateWithoutCompletedByInput = {
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutClassesNestedInput
    instructor?: UserUpdateOneRequiredWithoutClassesNestedInput
    inProgressBy?: InProgressCourseUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutCompletedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    inProgressBy?: InProgressCourseUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutCompletedCoursesInput = {
    update: XOR<UserUpdateWithoutCompletedCoursesInput, UserUncheckedUpdateWithoutCompletedCoursesInput>
    create: XOR<UserCreateWithoutCompletedCoursesInput, UserUncheckedCreateWithoutCompletedCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompletedCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompletedCoursesInput, UserUncheckedUpdateWithoutCompletedCoursesInput>
  }

  export type UserUpdateWithoutCompletedCoursesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pendingCourses?: PendingCourseUpdateManyWithoutUserNestedInput
    inprogressCourses?: InProgressCourseUpdateManyWithoutUserNestedInput
    classes?: ClassUpdateManyWithoutInstructorNestedInput
    interests?: InterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompletedCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pendingCourses?: PendingCourseUncheckedUpdateManyWithoutUserNestedInput
    inprogressCourses?: InProgressCourseUncheckedUpdateManyWithoutUserNestedInput
    classes?: ClassUncheckedUpdateManyWithoutInstructorNestedInput
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassCreateWithoutInProgressByInput = {
    semester: string
    year: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    course: CourseCreateNestedOneWithoutClassesInput
    instructor: UserCreateNestedOneWithoutClassesInput
    completedBy?: CompletedCourseCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutInProgressByInput = {
    id?: number
    courseId: number
    semester: string
    year: number
    userId: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
    completedBy?: CompletedCourseUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutInProgressByInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutInProgressByInput, ClassUncheckedCreateWithoutInProgressByInput>
  }

  export type UserCreateWithoutInprogressCoursesInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    pendingCourses?: PendingCourseCreateNestedManyWithoutUserInput
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    classes?: ClassCreateNestedManyWithoutInstructorInput
    interests?: InterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInprogressCoursesInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    pendingCourses?: PendingCourseUncheckedCreateNestedManyWithoutUserInput
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    classes?: ClassUncheckedCreateNestedManyWithoutInstructorInput
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInprogressCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInprogressCoursesInput, UserUncheckedCreateWithoutInprogressCoursesInput>
  }

  export type ClassUpsertWithoutInProgressByInput = {
    update: XOR<ClassUpdateWithoutInProgressByInput, ClassUncheckedUpdateWithoutInProgressByInput>
    create: XOR<ClassCreateWithoutInProgressByInput, ClassUncheckedCreateWithoutInProgressByInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutInProgressByInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutInProgressByInput, ClassUncheckedUpdateWithoutInProgressByInput>
  }

  export type ClassUpdateWithoutInProgressByInput = {
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutClassesNestedInput
    instructor?: UserUpdateOneRequiredWithoutClassesNestedInput
    completedBy?: CompletedCourseUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutInProgressByInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    completedBy?: CompletedCourseUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutInprogressCoursesInput = {
    update: XOR<UserUpdateWithoutInprogressCoursesInput, UserUncheckedUpdateWithoutInprogressCoursesInput>
    create: XOR<UserCreateWithoutInprogressCoursesInput, UserUncheckedCreateWithoutInprogressCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInprogressCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInprogressCoursesInput, UserUncheckedUpdateWithoutInprogressCoursesInput>
  }

  export type UserUpdateWithoutInprogressCoursesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pendingCourses?: PendingCourseUpdateManyWithoutUserNestedInput
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    classes?: ClassUpdateManyWithoutInstructorNestedInput
    interests?: InterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInprogressCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pendingCourses?: PendingCourseUncheckedUpdateManyWithoutUserNestedInput
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    classes?: ClassUncheckedUpdateManyWithoutInstructorNestedInput
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseCreateWithoutPendingByInput = {
    code: string
    name: string
    category: string
    classes?: ClassCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    requiredBy?: PrerequisiteCreateNestedManyWithoutPrerequisiteCourseInput
    publishedCourses?: PublishedCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPendingByInput = {
    id?: number
    code: string
    name: string
    category: string
    classes?: ClassUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    requiredBy?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteCourseInput
    publishedCourses?: PublishedCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPendingByInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPendingByInput, CourseUncheckedCreateWithoutPendingByInput>
  }

  export type UserCreateWithoutPendingCoursesInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    inprogressCourses?: InProgressCourseCreateNestedManyWithoutUserInput
    classes?: ClassCreateNestedManyWithoutInstructorInput
    interests?: InterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPendingCoursesInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    inprogressCourses?: InProgressCourseUncheckedCreateNestedManyWithoutUserInput
    classes?: ClassUncheckedCreateNestedManyWithoutInstructorInput
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPendingCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPendingCoursesInput, UserUncheckedCreateWithoutPendingCoursesInput>
  }

  export type CourseUpsertWithoutPendingByInput = {
    update: XOR<CourseUpdateWithoutPendingByInput, CourseUncheckedUpdateWithoutPendingByInput>
    create: XOR<CourseCreateWithoutPendingByInput, CourseUncheckedCreateWithoutPendingByInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPendingByInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPendingByInput, CourseUncheckedUpdateWithoutPendingByInput>
  }

  export type CourseUpdateWithoutPendingByInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    classes?: ClassUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    requiredBy?: PrerequisiteUpdateManyWithoutPrerequisiteCourseNestedInput
    publishedCourses?: PublishedCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPendingByInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    classes?: ClassUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    requiredBy?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteCourseNestedInput
    publishedCourses?: PublishedCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutPendingCoursesInput = {
    update: XOR<UserUpdateWithoutPendingCoursesInput, UserUncheckedUpdateWithoutPendingCoursesInput>
    create: XOR<UserCreateWithoutPendingCoursesInput, UserUncheckedCreateWithoutPendingCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPendingCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPendingCoursesInput, UserUncheckedUpdateWithoutPendingCoursesInput>
  }

  export type UserUpdateWithoutPendingCoursesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    inprogressCourses?: InProgressCourseUpdateManyWithoutUserNestedInput
    classes?: ClassUpdateManyWithoutInstructorNestedInput
    interests?: InterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPendingCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    inprogressCourses?: InProgressCourseUncheckedUpdateManyWithoutUserNestedInput
    classes?: ClassUncheckedUpdateManyWithoutInstructorNestedInput
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseCreateWithoutPublishedCoursesInput = {
    code: string
    name: string
    category: string
    classes?: ClassCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    requiredBy?: PrerequisiteCreateNestedManyWithoutPrerequisiteCourseInput
    pendingBy?: PendingCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPublishedCoursesInput = {
    id?: number
    code: string
    name: string
    category: string
    classes?: ClassUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    requiredBy?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteCourseInput
    pendingBy?: PendingCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPublishedCoursesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPublishedCoursesInput, CourseUncheckedCreateWithoutPublishedCoursesInput>
  }

  export type InterestCreateWithoutPublishedCourseInput = {
    status: string
    user: UserCreateNestedOneWithoutInterestsInput
  }

  export type InterestUncheckedCreateWithoutPublishedCourseInput = {
    id?: number
    userId: number
    status: string
  }

  export type InterestCreateOrConnectWithoutPublishedCourseInput = {
    where: InterestWhereUniqueInput
    create: XOR<InterestCreateWithoutPublishedCourseInput, InterestUncheckedCreateWithoutPublishedCourseInput>
  }

  export type InterestCreateManyPublishedCourseInputEnvelope = {
    data: InterestCreateManyPublishedCourseInput | InterestCreateManyPublishedCourseInput[]
  }

  export type CourseUpsertWithoutPublishedCoursesInput = {
    update: XOR<CourseUpdateWithoutPublishedCoursesInput, CourseUncheckedUpdateWithoutPublishedCoursesInput>
    create: XOR<CourseCreateWithoutPublishedCoursesInput, CourseUncheckedCreateWithoutPublishedCoursesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPublishedCoursesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPublishedCoursesInput, CourseUncheckedUpdateWithoutPublishedCoursesInput>
  }

  export type CourseUpdateWithoutPublishedCoursesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    classes?: ClassUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    requiredBy?: PrerequisiteUpdateManyWithoutPrerequisiteCourseNestedInput
    pendingBy?: PendingCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPublishedCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    classes?: ClassUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    requiredBy?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteCourseNestedInput
    pendingBy?: PendingCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type InterestUpsertWithWhereUniqueWithoutPublishedCourseInput = {
    where: InterestWhereUniqueInput
    update: XOR<InterestUpdateWithoutPublishedCourseInput, InterestUncheckedUpdateWithoutPublishedCourseInput>
    create: XOR<InterestCreateWithoutPublishedCourseInput, InterestUncheckedCreateWithoutPublishedCourseInput>
  }

  export type InterestUpdateWithWhereUniqueWithoutPublishedCourseInput = {
    where: InterestWhereUniqueInput
    data: XOR<InterestUpdateWithoutPublishedCourseInput, InterestUncheckedUpdateWithoutPublishedCourseInput>
  }

  export type InterestUpdateManyWithWhereWithoutPublishedCourseInput = {
    where: InterestScalarWhereInput
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyWithoutPublishedCourseInput>
  }

  export type UserCreateWithoutInterestsInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    pendingCourses?: PendingCourseCreateNestedManyWithoutUserInput
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    inprogressCourses?: InProgressCourseCreateNestedManyWithoutUserInput
    classes?: ClassCreateNestedManyWithoutInstructorInput
  }

  export type UserUncheckedCreateWithoutInterestsInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    pendingCourses?: PendingCourseUncheckedCreateNestedManyWithoutUserInput
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    inprogressCourses?: InProgressCourseUncheckedCreateNestedManyWithoutUserInput
    classes?: ClassUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type UserCreateOrConnectWithoutInterestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
  }

  export type PublishedCourseCreateWithoutInterestsInput = {
    semester: string
    year: number
    deadline: Date | string
    course: CourseCreateNestedOneWithoutPublishedCoursesInput
  }

  export type PublishedCourseUncheckedCreateWithoutInterestsInput = {
    id?: number
    courseId: number
    semester: string
    year: number
    deadline: Date | string
  }

  export type PublishedCourseCreateOrConnectWithoutInterestsInput = {
    where: PublishedCourseWhereUniqueInput
    create: XOR<PublishedCourseCreateWithoutInterestsInput, PublishedCourseUncheckedCreateWithoutInterestsInput>
  }

  export type UserUpsertWithoutInterestsInput = {
    update: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type UserUpdateWithoutInterestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pendingCourses?: PendingCourseUpdateManyWithoutUserNestedInput
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    inprogressCourses?: InProgressCourseUpdateManyWithoutUserNestedInput
    classes?: ClassUpdateManyWithoutInstructorNestedInput
  }

  export type UserUncheckedUpdateWithoutInterestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pendingCourses?: PendingCourseUncheckedUpdateManyWithoutUserNestedInput
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    inprogressCourses?: InProgressCourseUncheckedUpdateManyWithoutUserNestedInput
    classes?: ClassUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type PublishedCourseUpsertWithoutInterestsInput = {
    update: XOR<PublishedCourseUpdateWithoutInterestsInput, PublishedCourseUncheckedUpdateWithoutInterestsInput>
    create: XOR<PublishedCourseCreateWithoutInterestsInput, PublishedCourseUncheckedCreateWithoutInterestsInput>
    where?: PublishedCourseWhereInput
  }

  export type PublishedCourseUpdateToOneWithWhereWithoutInterestsInput = {
    where?: PublishedCourseWhereInput
    data: XOR<PublishedCourseUpdateWithoutInterestsInput, PublishedCourseUncheckedUpdateWithoutInterestsInput>
  }

  export type PublishedCourseUpdateWithoutInterestsInput = {
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutPublishedCoursesNestedInput
  }

  export type PublishedCourseUncheckedUpdateWithoutInterestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingCourseCreateManyUserInput = {
    id?: number
    courseId: number
  }

  export type CompletedCourseCreateManyUserInput = {
    id?: number
    classId: number
    grade?: string | null
  }

  export type InProgressCourseCreateManyUserInput = {
    id?: number
    classId: number
    grade?: string | null
  }

  export type ClassCreateManyInstructorInput = {
    id?: number
    courseId: number
    semester: string
    year: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
  }

  export type InterestCreateManyUserInput = {
    id?: number
    publishedCourseId: number
    status: string
  }

  export type PendingCourseUpdateWithoutUserInput = {
    course?: CourseUpdateOneRequiredWithoutPendingByNestedInput
  }

  export type PendingCourseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type PendingCourseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type CompletedCourseUpdateWithoutUserInput = {
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneRequiredWithoutCompletedByNestedInput
  }

  export type CompletedCourseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedCourseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InProgressCourseUpdateWithoutUserInput = {
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneRequiredWithoutInProgressByNestedInput
  }

  export type InProgressCourseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InProgressCourseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassUpdateWithoutInstructorInput = {
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutClassesNestedInput
    completedBy?: CompletedCourseUpdateManyWithoutClassNestedInput
    inProgressBy?: InProgressCourseUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    completedBy?: CompletedCourseUncheckedUpdateManyWithoutClassNestedInput
    inProgressBy?: InProgressCourseUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    publishedCourse?: PublishedCourseUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type InterestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    publishedCourseId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    publishedCourseId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateManyCourseInput = {
    id?: number
    semester: string
    year: number
    userId: number
    availableSeats: number
    studentEnrolled: number
    isValidated: number
    time: string
  }

  export type PrerequisiteCreateManyCourseInput = {
    id?: number
    prerequisiteCourseId: number
  }

  export type PrerequisiteCreateManyPrerequisiteCourseInput = {
    id?: number
    courseId: number
  }

  export type PublishedCourseCreateManyCourseInput = {
    id?: number
    semester: string
    year: number
    deadline: Date | string
  }

  export type PendingCourseCreateManyCourseInput = {
    id?: number
    userId: number
  }

  export type ClassUpdateWithoutCourseInput = {
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    instructor?: UserUpdateOneRequiredWithoutClassesNestedInput
    completedBy?: CompletedCourseUpdateManyWithoutClassNestedInput
    inProgressBy?: InProgressCourseUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    completedBy?: CompletedCourseUncheckedUpdateManyWithoutClassNestedInput
    inProgressBy?: InProgressCourseUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    studentEnrolled?: IntFieldUpdateOperationsInput | number
    isValidated?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteUpdateWithoutCourseInput = {
    prerequisiteCourse?: CourseUpdateOneRequiredWithoutRequiredByNestedInput
  }

  export type PrerequisiteUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    prerequisiteCourseId?: IntFieldUpdateOperationsInput | number
  }

  export type PrerequisiteUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    prerequisiteCourseId?: IntFieldUpdateOperationsInput | number
  }

  export type PrerequisiteUpdateWithoutPrerequisiteCourseInput = {
    course?: CourseUpdateOneRequiredWithoutPrerequisitesNestedInput
  }

  export type PrerequisiteUncheckedUpdateWithoutPrerequisiteCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type PrerequisiteUncheckedUpdateManyWithoutPrerequisiteCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type PublishedCourseUpdateWithoutCourseInput = {
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InterestUpdateManyWithoutPublishedCourseNestedInput
  }

  export type PublishedCourseUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InterestUncheckedUpdateManyWithoutPublishedCourseNestedInput
  }

  export type PublishedCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingCourseUpdateWithoutCourseInput = {
    user?: UserUpdateOneRequiredWithoutPendingCoursesNestedInput
  }

  export type PendingCourseUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PendingCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CompletedCourseCreateManyClassInput = {
    id?: number
    userId: number
    grade?: string | null
  }

  export type InProgressCourseCreateManyClassInput = {
    id?: number
    userId: number
    grade?: string | null
  }

  export type CompletedCourseUpdateWithoutClassInput = {
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompletedCoursesNestedInput
  }

  export type CompletedCourseUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedCourseUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InProgressCourseUpdateWithoutClassInput = {
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInprogressCoursesNestedInput
  }

  export type InProgressCourseUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InProgressCourseUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterestCreateManyPublishedCourseInput = {
    id?: number
    userId: number
    status: string
  }

  export type InterestUpdateWithoutPublishedCourseInput = {
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type InterestUncheckedUpdateWithoutPublishedCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateManyWithoutPublishedCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}