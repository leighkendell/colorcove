export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight?: Maybe<Scalars['String']>;
  shadow?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  url = 'url',
  publicURL = 'publicURL',
}

export type FileFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION',
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  fixed?: Maybe<ImageSharpFixed>;
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  grayscale: Scalars['Boolean'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  fit: ImageFit;
  background: Scalars['String'];
  rotate: Scalars['Int'];
  trim: Scalars['Float'];
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  grayscale: Scalars['Boolean'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  fit: ImageFit;
  background: Scalars['String'];
  rotate: Scalars['Int'];
  trim: Scalars['Float'];
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale: Scalars['Boolean'];
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  fit: ImageFit;
  background: Scalars['String'];
  rotate: Scalars['Int'];
  trim: Scalars['Float'];
  sizes: Scalars['String'];
  srcSetBreakpoints: Array<Maybe<Scalars['Int']>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale: Scalars['Boolean'];
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  fit: ImageFit;
  background: Scalars['String'];
  rotate: Scalars['Int'];
  trim: Scalars['Float'];
  sizes: Scalars['String'];
  srcSetBreakpoints: Array<Maybe<Scalars['Int']>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive: Scalars['Boolean'];
  pngCompressionLevel: Scalars['Int'];
  pngCompressionSpeed: Scalars['Int'];
  grayscale: Scalars['Boolean'];
  duotone?: Maybe<DuotoneGradient>;
  base64: Scalars['Boolean'];
  traceSVG?: Maybe<Potrace>;
  toFormat: ImageFormat;
  cropFocus: ImageCropFocus;
  fit: ImageFit;
  background: Scalars['String'];
  rotate: Scalars['Int'];
  trim: Scalars['Float'];
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
}

export type ImageSharpFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  __typename?: 'Node';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
}

export type PrismicAllDocumentTypes = PrismicHome | PrismicProduct;

export type PrismicDocument = {
  __typename?: 'PrismicDocument';
  dataString?: Maybe<Scalars['String']>;
  first_publication_date?: Maybe<Scalars['Date']>;
  href?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lang?: Maybe<Scalars['String']>;
  last_publication_date?: Maybe<Scalars['Date']>;
  type?: Maybe<Scalars['String']>;
};

/** Embed videos, songs, tweets, slices, etc. */
export type PrismicEmbedType = {
  __typename?: 'PrismicEmbedType';
  /** The name of the author/owner of the resource. Fetched via oEmbed data. */
  author_name?: Maybe<Scalars['String']>;
  /** A URL for the author/owner of the resource. Fetched via oEmbed data. */
  author_url?: Maybe<Scalars['String']>;
  /** The suggested cache lifetime for this resource, in seconds. Consumers may
   * choose to use this value or not. Fetched via oEmbed data.
   */
  cache_age?: Maybe<Scalars['String']>;
  /** The URL of the resource. */
  embed_url?: Maybe<Scalars['String']>;
  /** The HTML required to display the resource. The HTML should have no padding or
   * margins. Consumers may wish to load the HTML in an off-domain iframe to avoid
   * XSS vulnerabilities. Fetched via oEmbed data.
   */
  html?: Maybe<Scalars['String']>;
  /** The name of the resource. */
  name?: Maybe<Scalars['String']>;
  /** The name of the resource provider. Fetched via oEmbed data. */
  provider_name?: Maybe<Scalars['String']>;
  /** The URL of the resource provider. Fetched via oEmbed data. */
  provider_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_height?: Maybe<Scalars['Int']>;
  /** A URL to a thumbnail image representing the resource. Fetched via oEmbed data. */
  thumbnail_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_width?: Maybe<Scalars['Int']>;
  /** A text title, describing the resource. Fetched via oEmbed data. */
  title?: Maybe<Scalars['String']>;
  /** The resource type. Fetched via oEmbed data. */
  type?: Maybe<Scalars['String']>;
  /** The oEmbed version number. */
  version?: Maybe<Scalars['String']>;
  is_plus?: Maybe<Scalars['String']>;
  account_type?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  thumbnail_url_with_play_button?: Maybe<Scalars['String']>;
  upload_date?: Maybe<Scalars['Date']>;
  video_id?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

/** Embed videos, songs, tweets, slices, etc. */
export type PrismicEmbedTypeUpload_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicEmbedTypeFilterInput = {
  author_name?: Maybe<StringQueryOperatorInput>;
  author_url?: Maybe<StringQueryOperatorInput>;
  cache_age?: Maybe<StringQueryOperatorInput>;
  embed_url?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  provider_name?: Maybe<StringQueryOperatorInput>;
  provider_url?: Maybe<StringQueryOperatorInput>;
  thumbnail_height?: Maybe<IntQueryOperatorInput>;
  thumbnail_url?: Maybe<StringQueryOperatorInput>;
  thumbnail_width?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  is_plus?: Maybe<StringQueryOperatorInput>;
  account_type?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  thumbnail_url_with_play_button?: Maybe<StringQueryOperatorInput>;
  upload_date?: Maybe<DateQueryOperatorInput>;
  video_id?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

/** A field for storing geo-coordinates. */
export type PrismicGeoPointType = {
  __typename?: 'PrismicGeoPointType';
  /** The latitude value of the geo-coordinate. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude value of the geo-coordinate. */
  longitude?: Maybe<Scalars['Float']>;
};

export type PrismicHome = PrismicDocument &
  Node & {
    __typename?: 'PrismicHome';
    /** The document's data fields. */
    data?: Maybe<PrismicHomeDataType>;
    /** The document's data object without transformations exactly as it comes from the Prismic API. */
    dataRaw: Scalars['JSON'];
    /** The document's data object without transformations. The object is stringified
     * via `JSON.stringify` to eliminate the need to declare subfields.
     */
    dataString: Scalars['String'];
    /** The document's initial publication date. */
    first_publication_date: Scalars['Date'];
    /** The document's URL derived via the link resolver. */
    href: Scalars['String'];
    id: Scalars['ID'];
    /** The document's language. */
    lang: Scalars['String'];
    /** The document's most recent publication date */
    last_publication_date: Scalars['Date'];
    /** The document's list of tags. */
    tags: Array<Scalars['String']>;
    /** The document's Prismic API ID type. */
    type: Scalars['String'];
    /** The document's Prismic ID. */
    prismicId: Scalars['ID'];
    slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicHomeFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomeLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyFeatureText = Node & {
  __typename?: 'PrismicHomeBodyFeatureText';
  id: Scalars['ID'];
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicHomeBodyFeatureTextPrimaryType>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicHomeBodyFeatureTextConnection = {
  __typename?: 'PrismicHomeBodyFeatureTextConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyFeatureTextEdge>;
  nodes: Array<PrismicHomeBodyFeatureText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeBodyFeatureTextGroupConnection>;
};

export type PrismicHomeBodyFeatureTextConnectionDistinctArgs = {
  field: PrismicHomeBodyFeatureTextFieldsEnum;
};

export type PrismicHomeBodyFeatureTextConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeBodyFeatureTextFieldsEnum;
};

export type PrismicHomeBodyFeatureTextEdge = {
  __typename?: 'PrismicHomeBodyFeatureTextEdge';
  next?: Maybe<PrismicHomeBodyFeatureText>;
  node: PrismicHomeBodyFeatureText;
  previous?: Maybe<PrismicHomeBodyFeatureText>;
};

export enum PrismicHomeBodyFeatureTextFieldsEnum {
  id = 'id',
  slice_type = 'slice_type',
  primary___layout = 'primary___layout',
  primary___heading___html = 'primary___heading___html',
  primary___heading___text = 'primary___heading___text',
  primary___heading___raw = 'primary___heading___raw',
  primary___text___html = 'primary___text___html',
  primary___text___text = 'primary___text___text',
  primary___text___raw = 'primary___text___raw',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type PrismicHomeBodyFeatureTextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyFeatureTextPrimaryTypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicHomeBodyFeatureTextGroupConnection = {
  __typename?: 'PrismicHomeBodyFeatureTextGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyFeatureTextEdge>;
  nodes: Array<PrismicHomeBodyFeatureText>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyFeatureTextPrimaryType = {
  __typename?: 'PrismicHomeBodyFeatureTextPrimaryType';
  layout?: Maybe<Scalars['String']>;
  heading?: Maybe<PrismicStructuredTextType>;
  text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHomeBodyFeatureTextPrimaryTypeFilterInput = {
  layout?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<PrismicStructuredTextTypeFilterInput>;
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicHomeBodyFeatureTextSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeBodyFeatureTextFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeBodySlicesType =
  | PrismicHomeBodyFeatureText
  | PrismicHomeBodyVideo;

export type PrismicHomeBodyVideo = Node & {
  __typename?: 'PrismicHomeBodyVideo';
  id: Scalars['ID'];
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicHomeBodyVideoPrimaryType>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicHomeBodyVideoConnection = {
  __typename?: 'PrismicHomeBodyVideoConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyVideoEdge>;
  nodes: Array<PrismicHomeBodyVideo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeBodyVideoGroupConnection>;
};

export type PrismicHomeBodyVideoConnectionDistinctArgs = {
  field: PrismicHomeBodyVideoFieldsEnum;
};

export type PrismicHomeBodyVideoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeBodyVideoFieldsEnum;
};

export type PrismicHomeBodyVideoEdge = {
  __typename?: 'PrismicHomeBodyVideoEdge';
  next?: Maybe<PrismicHomeBodyVideo>;
  node: PrismicHomeBodyVideo;
  previous?: Maybe<PrismicHomeBodyVideo>;
};

export enum PrismicHomeBodyVideoFieldsEnum {
  id = 'id',
  slice_type = 'slice_type',
  primary___video___author_name = 'primary___video___author_name',
  primary___video___author_url = 'primary___video___author_url',
  primary___video___cache_age = 'primary___video___cache_age',
  primary___video___embed_url = 'primary___video___embed_url',
  primary___video___html = 'primary___video___html',
  primary___video___name = 'primary___video___name',
  primary___video___provider_name = 'primary___video___provider_name',
  primary___video___provider_url = 'primary___video___provider_url',
  primary___video___thumbnail_height = 'primary___video___thumbnail_height',
  primary___video___thumbnail_url = 'primary___video___thumbnail_url',
  primary___video___thumbnail_width = 'primary___video___thumbnail_width',
  primary___video___title = 'primary___video___title',
  primary___video___type = 'primary___video___type',
  primary___video___version = 'primary___video___version',
  primary___video___is_plus = 'primary___video___is_plus',
  primary___video___account_type = 'primary___video___account_type',
  primary___video___width = 'primary___video___width',
  primary___video___height = 'primary___video___height',
  primary___video___duration = 'primary___video___duration',
  primary___video___description = 'primary___video___description',
  primary___video___thumbnail_url_with_play_button = 'primary___video___thumbnail_url_with_play_button',
  primary___video___upload_date = 'primary___video___upload_date',
  primary___video___video_id = 'primary___video___video_id',
  primary___video___uri = 'primary___video___uri',
  primary___video_image___alt = 'primary___video_image___alt',
  primary___video_image___copyright = 'primary___video_image___copyright',
  primary___video_image___dimensions___width = 'primary___video_image___dimensions___width',
  primary___video_image___dimensions___height = 'primary___video_image___dimensions___height',
  primary___video_image___url = 'primary___video_image___url',
  primary___video_image___localFile___id = 'primary___video_image___localFile___id',
  primary___video_image___localFile___children = 'primary___video_image___localFile___children',
  primary___video_image___localFile___sourceInstanceName = 'primary___video_image___localFile___sourceInstanceName',
  primary___video_image___localFile___absolutePath = 'primary___video_image___localFile___absolutePath',
  primary___video_image___localFile___relativePath = 'primary___video_image___localFile___relativePath',
  primary___video_image___localFile___extension = 'primary___video_image___localFile___extension',
  primary___video_image___localFile___size = 'primary___video_image___localFile___size',
  primary___video_image___localFile___prettySize = 'primary___video_image___localFile___prettySize',
  primary___video_image___localFile___modifiedTime = 'primary___video_image___localFile___modifiedTime',
  primary___video_image___localFile___accessTime = 'primary___video_image___localFile___accessTime',
  primary___video_image___localFile___changeTime = 'primary___video_image___localFile___changeTime',
  primary___video_image___localFile___birthTime = 'primary___video_image___localFile___birthTime',
  primary___video_image___localFile___root = 'primary___video_image___localFile___root',
  primary___video_image___localFile___dir = 'primary___video_image___localFile___dir',
  primary___video_image___localFile___base = 'primary___video_image___localFile___base',
  primary___video_image___localFile___ext = 'primary___video_image___localFile___ext',
  primary___video_image___localFile___name = 'primary___video_image___localFile___name',
  primary___video_image___localFile___relativeDirectory = 'primary___video_image___localFile___relativeDirectory',
  primary___video_image___localFile___dev = 'primary___video_image___localFile___dev',
  primary___video_image___localFile___mode = 'primary___video_image___localFile___mode',
  primary___video_image___localFile___nlink = 'primary___video_image___localFile___nlink',
  primary___video_image___localFile___uid = 'primary___video_image___localFile___uid',
  primary___video_image___localFile___gid = 'primary___video_image___localFile___gid',
  primary___video_image___localFile___rdev = 'primary___video_image___localFile___rdev',
  primary___video_image___localFile___blksize = 'primary___video_image___localFile___blksize',
  primary___video_image___localFile___ino = 'primary___video_image___localFile___ino',
  primary___video_image___localFile___blocks = 'primary___video_image___localFile___blocks',
  primary___video_image___localFile___atimeMs = 'primary___video_image___localFile___atimeMs',
  primary___video_image___localFile___mtimeMs = 'primary___video_image___localFile___mtimeMs',
  primary___video_image___localFile___ctimeMs = 'primary___video_image___localFile___ctimeMs',
  primary___video_image___localFile___birthtimeMs = 'primary___video_image___localFile___birthtimeMs',
  primary___video_image___localFile___atime = 'primary___video_image___localFile___atime',
  primary___video_image___localFile___mtime = 'primary___video_image___localFile___mtime',
  primary___video_image___localFile___ctime = 'primary___video_image___localFile___ctime',
  primary___video_image___localFile___birthtime = 'primary___video_image___localFile___birthtime',
  primary___video_image___localFile___url = 'primary___video_image___localFile___url',
  primary___video_image___localFile___publicURL = 'primary___video_image___localFile___publicURL',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type PrismicHomeBodyVideoFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyVideoPrimaryTypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicHomeBodyVideoGroupConnection = {
  __typename?: 'PrismicHomeBodyVideoGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyVideoEdge>;
  nodes: Array<PrismicHomeBodyVideo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyVideoPrimaryType = {
  __typename?: 'PrismicHomeBodyVideoPrimaryType';
  video?: Maybe<PrismicEmbedType>;
  video_image?: Maybe<PrismicImageType>;
};

export type PrismicHomeBodyVideoPrimaryTypeFilterInput = {
  video?: Maybe<PrismicEmbedTypeFilterInput>;
  video_image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicHomeBodyVideoSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeBodyVideoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeConnection = {
  __typename?: 'PrismicHomeConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeEdge>;
  nodes: Array<PrismicHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeGroupConnection>;
};

export type PrismicHomeConnectionDistinctArgs = {
  field: PrismicHomeFieldsEnum;
};

export type PrismicHomeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeFieldsEnum;
};

export type PrismicHomeDataType = {
  __typename?: 'PrismicHomeDataType';
  title?: Maybe<PrismicStructuredTextType>;
  intro?: Maybe<PrismicStructuredTextType>;
  image?: Maybe<PrismicImageType>;
  body?: Maybe<Array<Maybe<PrismicHomeBodySlicesType>>>;
};

export type PrismicHomeDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  intro?: Maybe<PrismicStructuredTextTypeFilterInput>;
  image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicHomeEdge = {
  __typename?: 'PrismicHomeEdge';
  next?: Maybe<PrismicHome>;
  node: PrismicHome;
  previous?: Maybe<PrismicHome>;
};

export enum PrismicHomeFieldsEnum {
  data___title___html = 'data___title___html',
  data___title___text = 'data___title___text',
  data___title___raw = 'data___title___raw',
  data___intro___html = 'data___intro___html',
  data___intro___text = 'data___intro___text',
  data___intro___raw = 'data___intro___raw',
  data___image___alt = 'data___image___alt',
  data___image___copyright = 'data___image___copyright',
  data___image___dimensions___width = 'data___image___dimensions___width',
  data___image___dimensions___height = 'data___image___dimensions___height',
  data___image___url = 'data___image___url',
  data___image___localFile___id = 'data___image___localFile___id',
  data___image___localFile___children = 'data___image___localFile___children',
  data___image___localFile___sourceInstanceName = 'data___image___localFile___sourceInstanceName',
  data___image___localFile___absolutePath = 'data___image___localFile___absolutePath',
  data___image___localFile___relativePath = 'data___image___localFile___relativePath',
  data___image___localFile___extension = 'data___image___localFile___extension',
  data___image___localFile___size = 'data___image___localFile___size',
  data___image___localFile___prettySize = 'data___image___localFile___prettySize',
  data___image___localFile___modifiedTime = 'data___image___localFile___modifiedTime',
  data___image___localFile___accessTime = 'data___image___localFile___accessTime',
  data___image___localFile___changeTime = 'data___image___localFile___changeTime',
  data___image___localFile___birthTime = 'data___image___localFile___birthTime',
  data___image___localFile___root = 'data___image___localFile___root',
  data___image___localFile___dir = 'data___image___localFile___dir',
  data___image___localFile___base = 'data___image___localFile___base',
  data___image___localFile___ext = 'data___image___localFile___ext',
  data___image___localFile___name = 'data___image___localFile___name',
  data___image___localFile___relativeDirectory = 'data___image___localFile___relativeDirectory',
  data___image___localFile___dev = 'data___image___localFile___dev',
  data___image___localFile___mode = 'data___image___localFile___mode',
  data___image___localFile___nlink = 'data___image___localFile___nlink',
  data___image___localFile___uid = 'data___image___localFile___uid',
  data___image___localFile___gid = 'data___image___localFile___gid',
  data___image___localFile___rdev = 'data___image___localFile___rdev',
  data___image___localFile___blksize = 'data___image___localFile___blksize',
  data___image___localFile___ino = 'data___image___localFile___ino',
  data___image___localFile___blocks = 'data___image___localFile___blocks',
  data___image___localFile___atimeMs = 'data___image___localFile___atimeMs',
  data___image___localFile___mtimeMs = 'data___image___localFile___mtimeMs',
  data___image___localFile___ctimeMs = 'data___image___localFile___ctimeMs',
  data___image___localFile___birthtimeMs = 'data___image___localFile___birthtimeMs',
  data___image___localFile___atime = 'data___image___localFile___atime',
  data___image___localFile___mtime = 'data___image___localFile___mtime',
  data___image___localFile___ctime = 'data___image___localFile___ctime',
  data___image___localFile___birthtime = 'data___image___localFile___birthtime',
  data___image___localFile___url = 'data___image___localFile___url',
  data___image___localFile___publicURL = 'data___image___localFile___publicURL',
  dataRaw = 'dataRaw',
  dataString = 'dataString',
  first_publication_date = 'first_publication_date',
  href = 'href',
  id = 'id',
  lang = 'lang',
  last_publication_date = 'last_publication_date',
  tags = 'tags',
  type = 'type',
  prismicId = 'prismicId',
  slugs = 'slugs',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type PrismicHomeFilterInput = {
  data?: Maybe<PrismicHomeDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicHomeGroupConnection = {
  __typename?: 'PrismicHomeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeEdge>;
  nodes: Array<PrismicHome>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Dimensions for images. */
export type PrismicImageDimensionsType = {
  __typename?: 'PrismicImageDimensionsType';
  /** Width of the image in pixels. */
  width: Scalars['Int'];
  /** Height of the image in pixels. */
  height: Scalars['Int'];
};

export type PrismicImageDimensionsTypeFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

/** A responsive image field with constraints. */
export type PrismicImageType = {
  __typename?: 'PrismicImageType';
  /** The image's alternative text. */
  alt?: Maybe<Scalars['String']>;
  /** The image's copyright text. */
  copyright?: Maybe<Scalars['String']>;
  /** The image's dimensions. */
  dimensions: PrismicImageDimensionsType;
  /** The image's URL on Prismic's CDN. */
  url: Scalars['String'];
  /** The locally downloaded image if `shouldNormalizeImage` returns true. */
  localFile?: Maybe<File>;
};

export type PrismicImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

/** Link to web, media, and internal content. */
export type PrismicLinkType = {
  __typename?: 'PrismicLinkType';
  /** The type of link. */
  link_type: PrismicLinkTypes;
  /** If a Document link, `true` if linked document does not exist, `false` otherwise. */
  isBroken?: Maybe<Scalars['Boolean']>;
  /** The link URL using `prismic-dom` the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** The link's target. */
  target?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's Prismic ID. */
  id?: Maybe<Scalars['ID']>;
  /** If a Document link, the linked document's Prismic custom type API ID */
  type?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's list of tags. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If a Document link, the linked document's language. */
  lang?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's slug. */
  slug?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's UID. */
  uid?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document. */
  document?: Maybe<PrismicAllDocumentTypes>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

/** Types of links. */
export enum PrismicLinkTypes {
  /** Any of the other types */
  Any = 'Any',
  /** Internal content */
  Document = 'Document',
  /** Internal media content */
  Media = 'Media',
  /** URL */
  Web = 'Web',
}

export type PrismicProduct = PrismicDocument &
  Node & {
    __typename?: 'PrismicProduct';
    /** The document's data fields. */
    data?: Maybe<PrismicProductDataType>;
    /** The document's data object without transformations exactly as it comes from the Prismic API. */
    dataRaw: Scalars['JSON'];
    /** The document's data object without transformations. The object is stringified
     * via `JSON.stringify` to eliminate the need to declare subfields.
     */
    dataString: Scalars['String'];
    /** The document's initial publication date. */
    first_publication_date: Scalars['Date'];
    /** The document's URL derived via the link resolver. */
    href: Scalars['String'];
    id: Scalars['ID'];
    /** The document's language. */
    lang: Scalars['String'];
    /** The document's most recent publication date */
    last_publication_date: Scalars['Date'];
    /** The document's list of tags. */
    tags: Array<Scalars['String']>;
    /** The document's Prismic API ID type. */
    type: Scalars['String'];
    /** The document's Prismic ID. */
    prismicId: Scalars['ID'];
    /** The document's unique identifier. Unique among all instances of the document's type. */
    uid?: Maybe<Scalars['String']>;
    slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicProductFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicProductLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicProductBodyFeatureText = Node & {
  __typename?: 'PrismicProductBodyFeatureText';
  id: Scalars['ID'];
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicProductBodyFeatureTextPrimaryType>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicProductBodyFeatureTextButton = Node & {
  __typename?: 'PrismicProductBodyFeatureTextButton';
  id: Scalars['ID'];
  slice_type?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicProductBodyFeatureTextButtonConnection = {
  __typename?: 'PrismicProductBodyFeatureTextButtonConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductBodyFeatureTextButtonEdge>;
  nodes: Array<PrismicProductBodyFeatureTextButton>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicProductBodyFeatureTextButtonGroupConnection>;
};

export type PrismicProductBodyFeatureTextButtonConnectionDistinctArgs = {
  field: PrismicProductBodyFeatureTextButtonFieldsEnum;
};

export type PrismicProductBodyFeatureTextButtonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicProductBodyFeatureTextButtonFieldsEnum;
};

export type PrismicProductBodyFeatureTextButtonEdge = {
  __typename?: 'PrismicProductBodyFeatureTextButtonEdge';
  next?: Maybe<PrismicProductBodyFeatureTextButton>;
  node: PrismicProductBodyFeatureTextButton;
  previous?: Maybe<PrismicProductBodyFeatureTextButton>;
};

export enum PrismicProductBodyFeatureTextButtonFieldsEnum {
  id = 'id',
  slice_type = 'slice_type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type PrismicProductBodyFeatureTextButtonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicProductBodyFeatureTextButtonGroupConnection = {
  __typename?: 'PrismicProductBodyFeatureTextButtonGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductBodyFeatureTextButtonEdge>;
  nodes: Array<PrismicProductBodyFeatureTextButton>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicProductBodyFeatureTextButtonSortInput = {
  fields?: Maybe<Array<Maybe<PrismicProductBodyFeatureTextButtonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicProductBodyFeatureTextConnection = {
  __typename?: 'PrismicProductBodyFeatureTextConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductBodyFeatureTextEdge>;
  nodes: Array<PrismicProductBodyFeatureText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicProductBodyFeatureTextGroupConnection>;
};

export type PrismicProductBodyFeatureTextConnectionDistinctArgs = {
  field: PrismicProductBodyFeatureTextFieldsEnum;
};

export type PrismicProductBodyFeatureTextConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicProductBodyFeatureTextFieldsEnum;
};

export type PrismicProductBodyFeatureTextEdge = {
  __typename?: 'PrismicProductBodyFeatureTextEdge';
  next?: Maybe<PrismicProductBodyFeatureText>;
  node: PrismicProductBodyFeatureText;
  previous?: Maybe<PrismicProductBodyFeatureText>;
};

export enum PrismicProductBodyFeatureTextFieldsEnum {
  id = 'id',
  slice_type = 'slice_type',
  primary___layout = 'primary___layout',
  primary___heading___html = 'primary___heading___html',
  primary___heading___text = 'primary___heading___text',
  primary___heading___raw = 'primary___heading___raw',
  primary___text___html = 'primary___text___html',
  primary___text___text = 'primary___text___text',
  primary___text___raw = 'primary___text___raw',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type PrismicProductBodyFeatureTextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicProductBodyFeatureTextPrimaryTypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicProductBodyFeatureTextGroupConnection = {
  __typename?: 'PrismicProductBodyFeatureTextGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductBodyFeatureTextEdge>;
  nodes: Array<PrismicProductBodyFeatureText>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicProductBodyFeatureTextPrimaryType = {
  __typename?: 'PrismicProductBodyFeatureTextPrimaryType';
  layout?: Maybe<Scalars['String']>;
  heading?: Maybe<PrismicStructuredTextType>;
  text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicProductBodyFeatureTextPrimaryTypeFilterInput = {
  layout?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<PrismicStructuredTextTypeFilterInput>;
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicProductBodyFeatureTextSortInput = {
  fields?: Maybe<Array<Maybe<PrismicProductBodyFeatureTextFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicProductBodyImageComparison = Node & {
  __typename?: 'PrismicProductBodyImageComparison';
  id: Scalars['ID'];
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicProductBodyImageComparisonPrimaryType>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicProductBodyImageComparisonConnection = {
  __typename?: 'PrismicProductBodyImageComparisonConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductBodyImageComparisonEdge>;
  nodes: Array<PrismicProductBodyImageComparison>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicProductBodyImageComparisonGroupConnection>;
};

export type PrismicProductBodyImageComparisonConnectionDistinctArgs = {
  field: PrismicProductBodyImageComparisonFieldsEnum;
};

export type PrismicProductBodyImageComparisonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicProductBodyImageComparisonFieldsEnum;
};

export type PrismicProductBodyImageComparisonEdge = {
  __typename?: 'PrismicProductBodyImageComparisonEdge';
  next?: Maybe<PrismicProductBodyImageComparison>;
  node: PrismicProductBodyImageComparison;
  previous?: Maybe<PrismicProductBodyImageComparison>;
};

export enum PrismicProductBodyImageComparisonFieldsEnum {
  id = 'id',
  slice_type = 'slice_type',
  primary___name___html = 'primary___name___html',
  primary___name___text = 'primary___name___text',
  primary___name___raw = 'primary___name___raw',
  primary___before_image___alt = 'primary___before_image___alt',
  primary___before_image___copyright = 'primary___before_image___copyright',
  primary___before_image___dimensions___width = 'primary___before_image___dimensions___width',
  primary___before_image___dimensions___height = 'primary___before_image___dimensions___height',
  primary___before_image___url = 'primary___before_image___url',
  primary___before_image___localFile___id = 'primary___before_image___localFile___id',
  primary___before_image___localFile___children = 'primary___before_image___localFile___children',
  primary___before_image___localFile___sourceInstanceName = 'primary___before_image___localFile___sourceInstanceName',
  primary___before_image___localFile___absolutePath = 'primary___before_image___localFile___absolutePath',
  primary___before_image___localFile___relativePath = 'primary___before_image___localFile___relativePath',
  primary___before_image___localFile___extension = 'primary___before_image___localFile___extension',
  primary___before_image___localFile___size = 'primary___before_image___localFile___size',
  primary___before_image___localFile___prettySize = 'primary___before_image___localFile___prettySize',
  primary___before_image___localFile___modifiedTime = 'primary___before_image___localFile___modifiedTime',
  primary___before_image___localFile___accessTime = 'primary___before_image___localFile___accessTime',
  primary___before_image___localFile___changeTime = 'primary___before_image___localFile___changeTime',
  primary___before_image___localFile___birthTime = 'primary___before_image___localFile___birthTime',
  primary___before_image___localFile___root = 'primary___before_image___localFile___root',
  primary___before_image___localFile___dir = 'primary___before_image___localFile___dir',
  primary___before_image___localFile___base = 'primary___before_image___localFile___base',
  primary___before_image___localFile___ext = 'primary___before_image___localFile___ext',
  primary___before_image___localFile___name = 'primary___before_image___localFile___name',
  primary___before_image___localFile___relativeDirectory = 'primary___before_image___localFile___relativeDirectory',
  primary___before_image___localFile___dev = 'primary___before_image___localFile___dev',
  primary___before_image___localFile___mode = 'primary___before_image___localFile___mode',
  primary___before_image___localFile___nlink = 'primary___before_image___localFile___nlink',
  primary___before_image___localFile___uid = 'primary___before_image___localFile___uid',
  primary___before_image___localFile___gid = 'primary___before_image___localFile___gid',
  primary___before_image___localFile___rdev = 'primary___before_image___localFile___rdev',
  primary___before_image___localFile___blksize = 'primary___before_image___localFile___blksize',
  primary___before_image___localFile___ino = 'primary___before_image___localFile___ino',
  primary___before_image___localFile___blocks = 'primary___before_image___localFile___blocks',
  primary___before_image___localFile___atimeMs = 'primary___before_image___localFile___atimeMs',
  primary___before_image___localFile___mtimeMs = 'primary___before_image___localFile___mtimeMs',
  primary___before_image___localFile___ctimeMs = 'primary___before_image___localFile___ctimeMs',
  primary___before_image___localFile___birthtimeMs = 'primary___before_image___localFile___birthtimeMs',
  primary___before_image___localFile___atime = 'primary___before_image___localFile___atime',
  primary___before_image___localFile___mtime = 'primary___before_image___localFile___mtime',
  primary___before_image___localFile___ctime = 'primary___before_image___localFile___ctime',
  primary___before_image___localFile___birthtime = 'primary___before_image___localFile___birthtime',
  primary___before_image___localFile___url = 'primary___before_image___localFile___url',
  primary___before_image___localFile___publicURL = 'primary___before_image___localFile___publicURL',
  primary___after_image___alt = 'primary___after_image___alt',
  primary___after_image___copyright = 'primary___after_image___copyright',
  primary___after_image___dimensions___width = 'primary___after_image___dimensions___width',
  primary___after_image___dimensions___height = 'primary___after_image___dimensions___height',
  primary___after_image___url = 'primary___after_image___url',
  primary___after_image___localFile___id = 'primary___after_image___localFile___id',
  primary___after_image___localFile___children = 'primary___after_image___localFile___children',
  primary___after_image___localFile___sourceInstanceName = 'primary___after_image___localFile___sourceInstanceName',
  primary___after_image___localFile___absolutePath = 'primary___after_image___localFile___absolutePath',
  primary___after_image___localFile___relativePath = 'primary___after_image___localFile___relativePath',
  primary___after_image___localFile___extension = 'primary___after_image___localFile___extension',
  primary___after_image___localFile___size = 'primary___after_image___localFile___size',
  primary___after_image___localFile___prettySize = 'primary___after_image___localFile___prettySize',
  primary___after_image___localFile___modifiedTime = 'primary___after_image___localFile___modifiedTime',
  primary___after_image___localFile___accessTime = 'primary___after_image___localFile___accessTime',
  primary___after_image___localFile___changeTime = 'primary___after_image___localFile___changeTime',
  primary___after_image___localFile___birthTime = 'primary___after_image___localFile___birthTime',
  primary___after_image___localFile___root = 'primary___after_image___localFile___root',
  primary___after_image___localFile___dir = 'primary___after_image___localFile___dir',
  primary___after_image___localFile___base = 'primary___after_image___localFile___base',
  primary___after_image___localFile___ext = 'primary___after_image___localFile___ext',
  primary___after_image___localFile___name = 'primary___after_image___localFile___name',
  primary___after_image___localFile___relativeDirectory = 'primary___after_image___localFile___relativeDirectory',
  primary___after_image___localFile___dev = 'primary___after_image___localFile___dev',
  primary___after_image___localFile___mode = 'primary___after_image___localFile___mode',
  primary___after_image___localFile___nlink = 'primary___after_image___localFile___nlink',
  primary___after_image___localFile___uid = 'primary___after_image___localFile___uid',
  primary___after_image___localFile___gid = 'primary___after_image___localFile___gid',
  primary___after_image___localFile___rdev = 'primary___after_image___localFile___rdev',
  primary___after_image___localFile___blksize = 'primary___after_image___localFile___blksize',
  primary___after_image___localFile___ino = 'primary___after_image___localFile___ino',
  primary___after_image___localFile___blocks = 'primary___after_image___localFile___blocks',
  primary___after_image___localFile___atimeMs = 'primary___after_image___localFile___atimeMs',
  primary___after_image___localFile___mtimeMs = 'primary___after_image___localFile___mtimeMs',
  primary___after_image___localFile___ctimeMs = 'primary___after_image___localFile___ctimeMs',
  primary___after_image___localFile___birthtimeMs = 'primary___after_image___localFile___birthtimeMs',
  primary___after_image___localFile___atime = 'primary___after_image___localFile___atime',
  primary___after_image___localFile___mtime = 'primary___after_image___localFile___mtime',
  primary___after_image___localFile___ctime = 'primary___after_image___localFile___ctime',
  primary___after_image___localFile___birthtime = 'primary___after_image___localFile___birthtime',
  primary___after_image___localFile___url = 'primary___after_image___localFile___url',
  primary___after_image___localFile___publicURL = 'primary___after_image___localFile___publicURL',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type PrismicProductBodyImageComparisonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicProductBodyImageComparisonPrimaryTypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicProductBodyImageComparisonGroupConnection = {
  __typename?: 'PrismicProductBodyImageComparisonGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductBodyImageComparisonEdge>;
  nodes: Array<PrismicProductBodyImageComparison>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicProductBodyImageComparisonPrimaryType = {
  __typename?: 'PrismicProductBodyImageComparisonPrimaryType';
  name?: Maybe<PrismicStructuredTextType>;
  before_image?: Maybe<PrismicImageType>;
  after_image?: Maybe<PrismicImageType>;
};

export type PrismicProductBodyImageComparisonPrimaryTypeFilterInput = {
  name?: Maybe<PrismicStructuredTextTypeFilterInput>;
  before_image?: Maybe<PrismicImageTypeFilterInput>;
  after_image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicProductBodyImageComparisonSortInput = {
  fields?: Maybe<Array<Maybe<PrismicProductBodyImageComparisonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicProductBodySlicesType =
  | PrismicProductBodyFeatureText
  | PrismicProductBodyVideo
  | PrismicProductBodyFeatureTextButton
  | PrismicProductBodyImageComparison;

export type PrismicProductBodyVideo = Node & {
  __typename?: 'PrismicProductBodyVideo';
  id: Scalars['ID'];
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicProductBodyVideoPrimaryType>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicProductBodyVideoConnection = {
  __typename?: 'PrismicProductBodyVideoConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductBodyVideoEdge>;
  nodes: Array<PrismicProductBodyVideo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicProductBodyVideoGroupConnection>;
};

export type PrismicProductBodyVideoConnectionDistinctArgs = {
  field: PrismicProductBodyVideoFieldsEnum;
};

export type PrismicProductBodyVideoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicProductBodyVideoFieldsEnum;
};

export type PrismicProductBodyVideoEdge = {
  __typename?: 'PrismicProductBodyVideoEdge';
  next?: Maybe<PrismicProductBodyVideo>;
  node: PrismicProductBodyVideo;
  previous?: Maybe<PrismicProductBodyVideo>;
};

export enum PrismicProductBodyVideoFieldsEnum {
  id = 'id',
  slice_type = 'slice_type',
  primary___video___author_name = 'primary___video___author_name',
  primary___video___author_url = 'primary___video___author_url',
  primary___video___cache_age = 'primary___video___cache_age',
  primary___video___embed_url = 'primary___video___embed_url',
  primary___video___html = 'primary___video___html',
  primary___video___name = 'primary___video___name',
  primary___video___provider_name = 'primary___video___provider_name',
  primary___video___provider_url = 'primary___video___provider_url',
  primary___video___thumbnail_height = 'primary___video___thumbnail_height',
  primary___video___thumbnail_url = 'primary___video___thumbnail_url',
  primary___video___thumbnail_width = 'primary___video___thumbnail_width',
  primary___video___title = 'primary___video___title',
  primary___video___type = 'primary___video___type',
  primary___video___version = 'primary___video___version',
  primary___video___is_plus = 'primary___video___is_plus',
  primary___video___account_type = 'primary___video___account_type',
  primary___video___width = 'primary___video___width',
  primary___video___height = 'primary___video___height',
  primary___video___duration = 'primary___video___duration',
  primary___video___description = 'primary___video___description',
  primary___video___thumbnail_url_with_play_button = 'primary___video___thumbnail_url_with_play_button',
  primary___video___upload_date = 'primary___video___upload_date',
  primary___video___video_id = 'primary___video___video_id',
  primary___video___uri = 'primary___video___uri',
  primary___video_image___alt = 'primary___video_image___alt',
  primary___video_image___copyright = 'primary___video_image___copyright',
  primary___video_image___dimensions___width = 'primary___video_image___dimensions___width',
  primary___video_image___dimensions___height = 'primary___video_image___dimensions___height',
  primary___video_image___url = 'primary___video_image___url',
  primary___video_image___localFile___id = 'primary___video_image___localFile___id',
  primary___video_image___localFile___children = 'primary___video_image___localFile___children',
  primary___video_image___localFile___sourceInstanceName = 'primary___video_image___localFile___sourceInstanceName',
  primary___video_image___localFile___absolutePath = 'primary___video_image___localFile___absolutePath',
  primary___video_image___localFile___relativePath = 'primary___video_image___localFile___relativePath',
  primary___video_image___localFile___extension = 'primary___video_image___localFile___extension',
  primary___video_image___localFile___size = 'primary___video_image___localFile___size',
  primary___video_image___localFile___prettySize = 'primary___video_image___localFile___prettySize',
  primary___video_image___localFile___modifiedTime = 'primary___video_image___localFile___modifiedTime',
  primary___video_image___localFile___accessTime = 'primary___video_image___localFile___accessTime',
  primary___video_image___localFile___changeTime = 'primary___video_image___localFile___changeTime',
  primary___video_image___localFile___birthTime = 'primary___video_image___localFile___birthTime',
  primary___video_image___localFile___root = 'primary___video_image___localFile___root',
  primary___video_image___localFile___dir = 'primary___video_image___localFile___dir',
  primary___video_image___localFile___base = 'primary___video_image___localFile___base',
  primary___video_image___localFile___ext = 'primary___video_image___localFile___ext',
  primary___video_image___localFile___name = 'primary___video_image___localFile___name',
  primary___video_image___localFile___relativeDirectory = 'primary___video_image___localFile___relativeDirectory',
  primary___video_image___localFile___dev = 'primary___video_image___localFile___dev',
  primary___video_image___localFile___mode = 'primary___video_image___localFile___mode',
  primary___video_image___localFile___nlink = 'primary___video_image___localFile___nlink',
  primary___video_image___localFile___uid = 'primary___video_image___localFile___uid',
  primary___video_image___localFile___gid = 'primary___video_image___localFile___gid',
  primary___video_image___localFile___rdev = 'primary___video_image___localFile___rdev',
  primary___video_image___localFile___blksize = 'primary___video_image___localFile___blksize',
  primary___video_image___localFile___ino = 'primary___video_image___localFile___ino',
  primary___video_image___localFile___blocks = 'primary___video_image___localFile___blocks',
  primary___video_image___localFile___atimeMs = 'primary___video_image___localFile___atimeMs',
  primary___video_image___localFile___mtimeMs = 'primary___video_image___localFile___mtimeMs',
  primary___video_image___localFile___ctimeMs = 'primary___video_image___localFile___ctimeMs',
  primary___video_image___localFile___birthtimeMs = 'primary___video_image___localFile___birthtimeMs',
  primary___video_image___localFile___atime = 'primary___video_image___localFile___atime',
  primary___video_image___localFile___mtime = 'primary___video_image___localFile___mtime',
  primary___video_image___localFile___ctime = 'primary___video_image___localFile___ctime',
  primary___video_image___localFile___birthtime = 'primary___video_image___localFile___birthtime',
  primary___video_image___localFile___url = 'primary___video_image___localFile___url',
  primary___video_image___localFile___publicURL = 'primary___video_image___localFile___publicURL',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type PrismicProductBodyVideoFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicProductBodyVideoPrimaryTypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicProductBodyVideoGroupConnection = {
  __typename?: 'PrismicProductBodyVideoGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductBodyVideoEdge>;
  nodes: Array<PrismicProductBodyVideo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicProductBodyVideoPrimaryType = {
  __typename?: 'PrismicProductBodyVideoPrimaryType';
  video?: Maybe<PrismicEmbedType>;
  video_image?: Maybe<PrismicImageType>;
};

export type PrismicProductBodyVideoPrimaryTypeFilterInput = {
  video?: Maybe<PrismicEmbedTypeFilterInput>;
  video_image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicProductBodyVideoSortInput = {
  fields?: Maybe<Array<Maybe<PrismicProductBodyVideoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicProductConnection = {
  __typename?: 'PrismicProductConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductEdge>;
  nodes: Array<PrismicProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicProductGroupConnection>;
};

export type PrismicProductConnectionDistinctArgs = {
  field: PrismicProductFieldsEnum;
};

export type PrismicProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicProductFieldsEnum;
};

export type PrismicProductDataType = {
  __typename?: 'PrismicProductDataType';
  title?: Maybe<PrismicStructuredTextType>;
  intro?: Maybe<PrismicStructuredTextType>;
  image?: Maybe<PrismicImageType>;
  body?: Maybe<Array<Maybe<PrismicProductBodySlicesType>>>;
};

export type PrismicProductDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  intro?: Maybe<PrismicStructuredTextTypeFilterInput>;
  image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicProductEdge = {
  __typename?: 'PrismicProductEdge';
  next?: Maybe<PrismicProduct>;
  node: PrismicProduct;
  previous?: Maybe<PrismicProduct>;
};

export enum PrismicProductFieldsEnum {
  data___title___html = 'data___title___html',
  data___title___text = 'data___title___text',
  data___title___raw = 'data___title___raw',
  data___intro___html = 'data___intro___html',
  data___intro___text = 'data___intro___text',
  data___intro___raw = 'data___intro___raw',
  data___image___alt = 'data___image___alt',
  data___image___copyright = 'data___image___copyright',
  data___image___dimensions___width = 'data___image___dimensions___width',
  data___image___dimensions___height = 'data___image___dimensions___height',
  data___image___url = 'data___image___url',
  data___image___localFile___id = 'data___image___localFile___id',
  data___image___localFile___children = 'data___image___localFile___children',
  data___image___localFile___sourceInstanceName = 'data___image___localFile___sourceInstanceName',
  data___image___localFile___absolutePath = 'data___image___localFile___absolutePath',
  data___image___localFile___relativePath = 'data___image___localFile___relativePath',
  data___image___localFile___extension = 'data___image___localFile___extension',
  data___image___localFile___size = 'data___image___localFile___size',
  data___image___localFile___prettySize = 'data___image___localFile___prettySize',
  data___image___localFile___modifiedTime = 'data___image___localFile___modifiedTime',
  data___image___localFile___accessTime = 'data___image___localFile___accessTime',
  data___image___localFile___changeTime = 'data___image___localFile___changeTime',
  data___image___localFile___birthTime = 'data___image___localFile___birthTime',
  data___image___localFile___root = 'data___image___localFile___root',
  data___image___localFile___dir = 'data___image___localFile___dir',
  data___image___localFile___base = 'data___image___localFile___base',
  data___image___localFile___ext = 'data___image___localFile___ext',
  data___image___localFile___name = 'data___image___localFile___name',
  data___image___localFile___relativeDirectory = 'data___image___localFile___relativeDirectory',
  data___image___localFile___dev = 'data___image___localFile___dev',
  data___image___localFile___mode = 'data___image___localFile___mode',
  data___image___localFile___nlink = 'data___image___localFile___nlink',
  data___image___localFile___uid = 'data___image___localFile___uid',
  data___image___localFile___gid = 'data___image___localFile___gid',
  data___image___localFile___rdev = 'data___image___localFile___rdev',
  data___image___localFile___blksize = 'data___image___localFile___blksize',
  data___image___localFile___ino = 'data___image___localFile___ino',
  data___image___localFile___blocks = 'data___image___localFile___blocks',
  data___image___localFile___atimeMs = 'data___image___localFile___atimeMs',
  data___image___localFile___mtimeMs = 'data___image___localFile___mtimeMs',
  data___image___localFile___ctimeMs = 'data___image___localFile___ctimeMs',
  data___image___localFile___birthtimeMs = 'data___image___localFile___birthtimeMs',
  data___image___localFile___atime = 'data___image___localFile___atime',
  data___image___localFile___mtime = 'data___image___localFile___mtime',
  data___image___localFile___ctime = 'data___image___localFile___ctime',
  data___image___localFile___birthtime = 'data___image___localFile___birthtime',
  data___image___localFile___url = 'data___image___localFile___url',
  data___image___localFile___publicURL = 'data___image___localFile___publicURL',
  dataRaw = 'dataRaw',
  dataString = 'dataString',
  first_publication_date = 'first_publication_date',
  href = 'href',
  id = 'id',
  lang = 'lang',
  last_publication_date = 'last_publication_date',
  tags = 'tags',
  type = 'type',
  prismicId = 'prismicId',
  uid = 'uid',
  slugs = 'slugs',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type PrismicProductFilterInput = {
  data?: Maybe<PrismicProductDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicProductGroupConnection = {
  __typename?: 'PrismicProductGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductEdge>;
  nodes: Array<PrismicProduct>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicProductSortInput = {
  fields?: Maybe<Array<Maybe<PrismicProductFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** A text field with formatting options. */
export type PrismicStructuredTextType = {
  __typename?: 'PrismicStructuredTextType';
  /** The HTML value of the text using `prismic-dom` and the HTML serializer. */
  html?: Maybe<Scalars['String']>;
  /** The plain text value of the text using `prismic-dom`. */
  text?: Maybe<Scalars['String']>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicStructuredTextTypeFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  prismicHomeBodyFeatureText?: Maybe<PrismicHomeBodyFeatureText>;
  allPrismicHomeBodyFeatureText?: Maybe<PrismicHomeBodyFeatureTextConnection>;
  prismicHomeBodyVideo?: Maybe<PrismicHomeBodyVideo>;
  allPrismicHomeBodyVideo?: Maybe<PrismicHomeBodyVideoConnection>;
  prismicHome?: Maybe<PrismicHome>;
  allPrismicHome?: Maybe<PrismicHomeConnection>;
  prismicProductBodyFeatureText?: Maybe<PrismicProductBodyFeatureText>;
  allPrismicProductBodyFeatureText?: Maybe<
    PrismicProductBodyFeatureTextConnection
  >;
  prismicProductBodyVideo?: Maybe<PrismicProductBodyVideo>;
  allPrismicProductBodyVideo?: Maybe<PrismicProductBodyVideoConnection>;
  prismicProductBodyFeatureTextButton?: Maybe<
    PrismicProductBodyFeatureTextButton
  >;
  allPrismicProductBodyFeatureTextButton?: Maybe<
    PrismicProductBodyFeatureTextButtonConnection
  >;
  prismicProductBodyImageComparison?: Maybe<PrismicProductBodyImageComparison>;
  allPrismicProductBodyImageComparison?: Maybe<
    PrismicProductBodyImageComparisonConnection
  >;
  prismicProduct?: Maybe<PrismicProduct>;
  allPrismicProduct?: Maybe<PrismicProductConnection>;
  sanityPage?: Maybe<SanityPage>;
  allSanityPage?: Maybe<SanityPageConnection>;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  allSanityFileAsset?: Maybe<SanityFileAssetConnection>;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  allSanityImageAsset?: Maybe<SanityImageAssetConnection>;
  file?: Maybe<File>;
  allFile?: Maybe<FileConnection>;
  sitePage?: Maybe<SitePage>;
  allSitePage?: Maybe<SitePageConnection>;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin?: Maybe<SitePluginConnection>;
  site?: Maybe<Site>;
  allSite?: Maybe<SiteConnection>;
  directory?: Maybe<Directory>;
  allDirectory?: Maybe<DirectoryConnection>;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp?: Maybe<ImageSharpConnection>;
};

export type QueryPrismicHomeBodyFeatureTextArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyFeatureTextPrimaryTypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicHomeBodyFeatureTextArgs = {
  filter?: Maybe<PrismicHomeBodyFeatureTextFilterInput>;
  sort?: Maybe<PrismicHomeBodyFeatureTextSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicHomeBodyVideoArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyVideoPrimaryTypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicHomeBodyVideoArgs = {
  filter?: Maybe<PrismicHomeBodyVideoFilterInput>;
  sort?: Maybe<PrismicHomeBodyVideoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicHomeArgs = {
  data?: Maybe<PrismicHomeDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicHomeArgs = {
  filter?: Maybe<PrismicHomeFilterInput>;
  sort?: Maybe<PrismicHomeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicProductBodyFeatureTextArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicProductBodyFeatureTextPrimaryTypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicProductBodyFeatureTextArgs = {
  filter?: Maybe<PrismicProductBodyFeatureTextFilterInput>;
  sort?: Maybe<PrismicProductBodyFeatureTextSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicProductBodyVideoArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicProductBodyVideoPrimaryTypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicProductBodyVideoArgs = {
  filter?: Maybe<PrismicProductBodyVideoFilterInput>;
  sort?: Maybe<PrismicProductBodyVideoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicProductBodyFeatureTextButtonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicProductBodyFeatureTextButtonArgs = {
  filter?: Maybe<PrismicProductBodyFeatureTextButtonFilterInput>;
  sort?: Maybe<PrismicProductBodyFeatureTextButtonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicProductBodyImageComparisonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicProductBodyImageComparisonPrimaryTypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicProductBodyImageComparisonArgs = {
  filter?: Maybe<PrismicProductBodyImageComparisonFilterInput>;
  sort?: Maybe<PrismicProductBodyImageComparisonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicProductArgs = {
  data?: Maybe<PrismicProductDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicProductArgs = {
  filter?: Maybe<PrismicProductFilterInput>;
  sort?: Maybe<PrismicProductSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySanityPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  hero?: Maybe<SanityHeroFilterInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawHero?: Maybe<JsonQueryOperatorInput>;
  _rawModules?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityPageArgs = {
  filter?: Maybe<SanityPageFilterInput>;
  sort?: Maybe<SanityPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>;
  sort?: Maybe<SanityFileAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  fixed?: Maybe<SanityImageFixedFilterInput>;
  fluid?: Maybe<SanityImageFluidFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>;
  sort?: Maybe<SanityImageAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryFileArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SanityBlock = {
  __typename?: 'SanityBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  sanityChildren?: Maybe<Array<Maybe<SanitySpan>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
};

/** A Sanity document */
export type SanityDocument = {
  __typename?: 'SanityDocument';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
};

export type SanityFeatureText = {
  __typename?: 'SanityFeatureText';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type SanityFeatureTextOrVimeo = SanityFeatureText | SanityVimeo;

export type SanityFile = {
  __typename?: 'SanityFile';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type SanityFileAsset = SanityDocument &
  Node & {
    __typename?: 'SanityFileAsset';
    _id?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    _createdAt?: Maybe<Scalars['Date']>;
    _updatedAt?: Maybe<Scalars['Date']>;
    _rev?: Maybe<Scalars['String']>;
    _key?: Maybe<Scalars['String']>;
    originalFilename?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    sha1hash?: Maybe<Scalars['String']>;
    extension?: Maybe<Scalars['String']>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    assetId?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityFileAssetConnection = {
  __typename?: 'SanityFileAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityFileAssetGroupConnection>;
};

export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  __typename?: 'SanityFileAssetEdge';
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export enum SanityFileAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type SanityFileAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFileAssetGroupConnection = {
  __typename?: 'SanityFileAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityGeopoint = {
  __typename?: 'SanityGeopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  lat?: Maybe<FloatQueryOperatorInput>;
  lng?: Maybe<FloatQueryOperatorInput>;
  alt?: Maybe<FloatQueryOperatorInput>;
};

export type SanityHero = {
  __typename?: 'SanityHero';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  image?: Maybe<SanityMainImage>;
};

export type SanityHeroFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  intro?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityMainImageFilterInput>;
};

export type SanityImage = {
  __typename?: 'SanityImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
};

export type SanityImageAsset = SanityDocument &
  Node & {
    __typename?: 'SanityImageAsset';
    _id?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    _createdAt?: Maybe<Scalars['Date']>;
    _updatedAt?: Maybe<Scalars['Date']>;
    _rev?: Maybe<Scalars['String']>;
    _key?: Maybe<Scalars['String']>;
    originalFilename?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    sha1hash?: Maybe<Scalars['String']>;
    extension?: Maybe<Scalars['String']>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    assetId?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
    metadata?: Maybe<SanityImageMetadata>;
    fixed?: Maybe<SanityImageFixed>;
    fluid?: Maybe<SanityImageFluid>;
    _rawMetadata?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    childImageSharp?: Maybe<ImageSharp>;
  };

export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFixedArgs = {
  width: Scalars['Int'];
  height?: Maybe<Scalars['Int']>;
  toFormat: SanityImageFormat;
};

export type SanityImageAssetFluidArgs = {
  maxWidth: Scalars['Int'];
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  toFormat: SanityImageFormat;
};

export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAssetConnection = {
  __typename?: 'SanityImageAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityImageAssetGroupConnection>;
};

export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  __typename?: 'SanityImageAssetEdge';
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export enum SanityImageAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  metadata____key = 'metadata____key',
  metadata____type = 'metadata____type',
  metadata___location____key = 'metadata___location____key',
  metadata___location____type = 'metadata___location____type',
  metadata___location___lat = 'metadata___location___lat',
  metadata___location___lng = 'metadata___location___lng',
  metadata___location___alt = 'metadata___location___alt',
  metadata___dimensions____key = 'metadata___dimensions____key',
  metadata___dimensions____type = 'metadata___dimensions____type',
  metadata___dimensions___height = 'metadata___dimensions___height',
  metadata___dimensions___width = 'metadata___dimensions___width',
  metadata___dimensions___aspectRatio = 'metadata___dimensions___aspectRatio',
  metadata___palette____key = 'metadata___palette____key',
  metadata___palette____type = 'metadata___palette____type',
  metadata___palette___darkMuted____key = 'metadata___palette___darkMuted____key',
  metadata___palette___darkMuted____type = 'metadata___palette___darkMuted____type',
  metadata___palette___darkMuted___background = 'metadata___palette___darkMuted___background',
  metadata___palette___darkMuted___foreground = 'metadata___palette___darkMuted___foreground',
  metadata___palette___darkMuted___population = 'metadata___palette___darkMuted___population',
  metadata___palette___darkMuted___title = 'metadata___palette___darkMuted___title',
  metadata___palette___lightVibrant____key = 'metadata___palette___lightVibrant____key',
  metadata___palette___lightVibrant____type = 'metadata___palette___lightVibrant____type',
  metadata___palette___lightVibrant___background = 'metadata___palette___lightVibrant___background',
  metadata___palette___lightVibrant___foreground = 'metadata___palette___lightVibrant___foreground',
  metadata___palette___lightVibrant___population = 'metadata___palette___lightVibrant___population',
  metadata___palette___lightVibrant___title = 'metadata___palette___lightVibrant___title',
  metadata___palette___darkVibrant____key = 'metadata___palette___darkVibrant____key',
  metadata___palette___darkVibrant____type = 'metadata___palette___darkVibrant____type',
  metadata___palette___darkVibrant___background = 'metadata___palette___darkVibrant___background',
  metadata___palette___darkVibrant___foreground = 'metadata___palette___darkVibrant___foreground',
  metadata___palette___darkVibrant___population = 'metadata___palette___darkVibrant___population',
  metadata___palette___darkVibrant___title = 'metadata___palette___darkVibrant___title',
  metadata___palette___vibrant____key = 'metadata___palette___vibrant____key',
  metadata___palette___vibrant____type = 'metadata___palette___vibrant____type',
  metadata___palette___vibrant___background = 'metadata___palette___vibrant___background',
  metadata___palette___vibrant___foreground = 'metadata___palette___vibrant___foreground',
  metadata___palette___vibrant___population = 'metadata___palette___vibrant___population',
  metadata___palette___vibrant___title = 'metadata___palette___vibrant___title',
  metadata___palette___dominant____key = 'metadata___palette___dominant____key',
  metadata___palette___dominant____type = 'metadata___palette___dominant____type',
  metadata___palette___dominant___background = 'metadata___palette___dominant___background',
  metadata___palette___dominant___foreground = 'metadata___palette___dominant___foreground',
  metadata___palette___dominant___population = 'metadata___palette___dominant___population',
  metadata___palette___dominant___title = 'metadata___palette___dominant___title',
  metadata___palette___lightMuted____key = 'metadata___palette___lightMuted____key',
  metadata___palette___lightMuted____type = 'metadata___palette___lightMuted____type',
  metadata___palette___lightMuted___background = 'metadata___palette___lightMuted___background',
  metadata___palette___lightMuted___foreground = 'metadata___palette___lightMuted___foreground',
  metadata___palette___lightMuted___population = 'metadata___palette___lightMuted___population',
  metadata___palette___lightMuted___title = 'metadata___palette___lightMuted___title',
  metadata___palette___muted____key = 'metadata___palette___muted____key',
  metadata___palette___muted____type = 'metadata___palette___muted____type',
  metadata___palette___muted___background = 'metadata___palette___muted___background',
  metadata___palette___muted___foreground = 'metadata___palette___muted___foreground',
  metadata___palette___muted___population = 'metadata___palette___muted___population',
  metadata___palette___muted___title = 'metadata___palette___muted___title',
  metadata___lqip = 'metadata___lqip',
  metadata___hasAlpha = 'metadata___hasAlpha',
  metadata___isOpaque = 'metadata___isOpaque',
  fixed___base64 = 'fixed___base64',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fluid___base64 = 'fluid___base64',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  _rawMetadata = '_rawMetadata',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type SanityImageAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  fixed?: Maybe<SanityImageFixedFilterInput>;
  fluid?: Maybe<SanityImageFluidFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityImageAssetGroupConnection = {
  __typename?: 'SanityImageAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  top?: Maybe<FloatQueryOperatorInput>;
  bottom?: Maybe<FloatQueryOperatorInput>;
  left?: Maybe<FloatQueryOperatorInput>;
  right?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageFixed = {
  __typename?: 'SanityImageFixed';
  base64?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type SanityImageFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type SanityImageFluid = {
  __typename?: 'SanityImageFluid';
  base64?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};

export type SanityImageFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export enum SanityImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  x?: Maybe<FloatQueryOperatorInput>;
  y?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<SanityGeopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<SanityGeopointFilterInput>;
  dimensions?: Maybe<SanityImageDimensionsFilterInput>;
  palette?: Maybe<SanityImagePaletteFilterInput>;
  lqip?: Maybe<StringQueryOperatorInput>;
  hasAlpha?: Maybe<BooleanQueryOperatorInput>;
  isOpaque?: Maybe<BooleanQueryOperatorInput>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  foreground?: Maybe<StringQueryOperatorInput>;
  population?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SanityMainImage = {
  __typename?: 'SanityMainImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
};

export type SanityMainImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  asset?: Maybe<SanityImageAssetFilterInput>;
  hotspot?: Maybe<SanityImageHotspotFilterInput>;
  crop?: Maybe<SanityImageCropFilterInput>;
};

export type SanityPage = SanityDocument &
  Node & {
    __typename?: 'SanityPage';
    _id?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    _createdAt?: Maybe<Scalars['Date']>;
    _updatedAt?: Maybe<Scalars['Date']>;
    _rev?: Maybe<Scalars['String']>;
    _key?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    slug?: Maybe<SanitySlug>;
    hero?: Maybe<SanityHero>;
    modules?: Maybe<Array<Maybe<SanityFeatureTextOrVimeo>>>;
    _rawSlug?: Maybe<Scalars['JSON']>;
    _rawHero?: Maybe<Scalars['JSON']>;
    _rawModules?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type SanityPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityPage_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPage_RawHeroArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPage_RawModulesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageConnection = {
  __typename?: 'SanityPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityPageGroupConnection>;
};

export type SanityPageConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};

export type SanityPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPageFieldsEnum;
};

export type SanityPageEdge = {
  __typename?: 'SanityPageEdge';
  next?: Maybe<SanityPage>;
  node: SanityPage;
  previous?: Maybe<SanityPage>;
};

export enum SanityPageFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  slug____key = 'slug____key',
  slug____type = 'slug____type',
  slug___current = 'slug___current',
  hero____key = 'hero____key',
  hero____type = 'hero____type',
  hero___title = 'hero___title',
  hero___intro = 'hero___intro',
  hero___image____key = 'hero___image____key',
  hero___image____type = 'hero___image____type',
  hero___image___alt = 'hero___image___alt',
  hero___image___asset____id = 'hero___image___asset____id',
  hero___image___asset____type = 'hero___image___asset____type',
  hero___image___asset____createdAt = 'hero___image___asset____createdAt',
  hero___image___asset____updatedAt = 'hero___image___asset____updatedAt',
  hero___image___asset____rev = 'hero___image___asset____rev',
  hero___image___asset____key = 'hero___image___asset____key',
  hero___image___asset___originalFilename = 'hero___image___asset___originalFilename',
  hero___image___asset___label = 'hero___image___asset___label',
  hero___image___asset___sha1hash = 'hero___image___asset___sha1hash',
  hero___image___asset___extension = 'hero___image___asset___extension',
  hero___image___asset___mimeType = 'hero___image___asset___mimeType',
  hero___image___asset___size = 'hero___image___asset___size',
  hero___image___asset___assetId = 'hero___image___asset___assetId',
  hero___image___asset___path = 'hero___image___asset___path',
  hero___image___asset___url = 'hero___image___asset___url',
  hero___image___asset____rawMetadata = 'hero___image___asset____rawMetadata',
  hero___image___asset___id = 'hero___image___asset___id',
  hero___image___asset___children = 'hero___image___asset___children',
  hero___image___hotspot____key = 'hero___image___hotspot____key',
  hero___image___hotspot____type = 'hero___image___hotspot____type',
  hero___image___hotspot___x = 'hero___image___hotspot___x',
  hero___image___hotspot___y = 'hero___image___hotspot___y',
  hero___image___hotspot___height = 'hero___image___hotspot___height',
  hero___image___hotspot___width = 'hero___image___hotspot___width',
  hero___image___crop____key = 'hero___image___crop____key',
  hero___image___crop____type = 'hero___image___crop____type',
  hero___image___crop___top = 'hero___image___crop___top',
  hero___image___crop___bottom = 'hero___image___crop___bottom',
  hero___image___crop___left = 'hero___image___crop___left',
  hero___image___crop___right = 'hero___image___crop___right',
  _rawSlug = '_rawSlug',
  _rawHero = '_rawHero',
  _rawModules = '_rawModules',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type SanityPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  hero?: Maybe<SanityHeroFilterInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawHero?: Maybe<JsonQueryOperatorInput>;
  _rawModules?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPageGroupConnection = {
  __typename?: 'SanityPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type SanitySlug = {
  __typename?: 'SanitySlug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  current?: Maybe<StringQueryOperatorInput>;
};

export type SanitySpan = {
  __typename?: 'SanitySpan';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanityVideoData = {
  __typename?: 'SanityVideoData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type SanityVimeo = {
  __typename?: 'SanityVimeo';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  data?: Maybe<SanityVideoData>;
  image?: Maybe<SanityMainImage>;
};

export type Site = Node & {
  __typename?: 'Site';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___author = 'siteMetadata___author',
  siteMetadata___primaryNav = 'siteMetadata___primaryNav',
  siteMetadata___primaryNav___title = 'siteMetadata___primaryNav___title',
  siteMetadata___primaryNav___link = 'siteMetadata___primaryNav___link',
  siteMetadata___secondaryNav = 'siteMetadata___secondaryNav',
  siteMetadata___secondaryNav___title = 'siteMetadata___secondaryNav___title',
  siteMetadata___secondaryNav___link = 'siteMetadata___secondaryNav___link',
  port = 'port',
  host = 'host',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  buildTime = 'buildTime',
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars['String']>;
  internalComponentName?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentChunkName?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  uid?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  path = 'path',
  internalComponentName = 'internalComponentName',
  component = 'component',
  componentChunkName = 'componentChunkName',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___uid = 'context___uid',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___repositoryName = 'pluginCreator___pluginOptions___repositoryName',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator___pluginOptions___accessToken',
  pluginCreator___pluginOptions___projectId = 'pluginCreator___pluginOptions___projectId',
  pluginCreator___pluginOptions___dataset = 'pluginCreator___pluginOptions___dataset',
  pluginCreator___pluginOptions___token = 'pluginCreator___pluginOptions___token',
  pluginCreator___pluginOptions___watchMode = 'pluginCreator___pluginOptions___watchMode',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___repositoryName = 'pluginOptions___repositoryName',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___projectId = 'pluginOptions___projectId',
  pluginOptions___dataset = 'pluginOptions___dataset',
  pluginOptions___token = 'pluginOptions___token',
  pluginOptions___watchMode = 'pluginOptions___watchMode',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  repositoryName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  schemas?: Maybe<SitePluginPluginOptionsSchemas>;
  projectId?: Maybe<Scalars['String']>;
  dataset?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  watchMode?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  repositoryName?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  projectId?: Maybe<StringQueryOperatorInput>;
  dataset?: Maybe<StringQueryOperatorInput>;
  token?: Maybe<StringQueryOperatorInput>;
  watchMode?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemas = {
  __typename?: 'SitePluginPluginOptionsSchemas';
  home?: Maybe<SitePluginPluginOptionsSchemasHome>;
  product?: Maybe<SitePluginPluginOptionsSchemasProduct>;
};

export type SitePluginPluginOptionsSchemasFilterInput = {
  home?: Maybe<SitePluginPluginOptionsSchemasHomeFilterInput>;
  product?: Maybe<SitePluginPluginOptionsSchemasProductFilterInput>;
};

export type SitePluginPluginOptionsSchemasHome = {
  __typename?: 'SitePluginPluginOptionsSchemasHome';
  Main?: Maybe<SitePluginPluginOptionsSchemasHomeMain>;
};

export type SitePluginPluginOptionsSchemasHomeFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasHomeMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMain = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMain';
  title?: Maybe<SitePluginPluginOptionsSchemasHomeMainTitle>;
  intro?: Maybe<SitePluginPluginOptionsSchemasHomeMainIntro>;
  image?: Maybe<SitePluginPluginOptionsSchemasHomeMainImage>;
  body?: Maybe<SitePluginPluginOptionsSchemasHomeMainBody>;
};

export type SitePluginPluginOptionsSchemasHomeMainBody = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBody';
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfig';
  choices?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoices = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoices';
  feature_text?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_Text
  >;
  video?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideo>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_Text = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_text';
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_Repeat
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_Repeat = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_textNon_repeat';
  layout?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatLayout
  >;
  heading?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatHeading
  >;
  text?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatText
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatFilterInput = {
  layout?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatLayoutFilterInput
  >;
  heading?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatHeadingFilterInput
  >;
  text?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatTextFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatHeading = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_textNon_repeatHeading';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatHeadingConfig
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatHeadingConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_textNon_repeatHeadingConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatHeadingConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatHeadingFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatHeadingConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatLayout = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_textNon_repeatLayout';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatLayoutConfig
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatLayoutConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_textNon_repeatLayoutConfig';
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  default_value?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatLayoutConfigFilterInput = {
  options?: Maybe<StringQueryOperatorInput>;
  default_value?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatLayoutFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatLayoutConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatText = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_textNon_repeatText';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatTextConfig
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatTextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_textNon_repeatTextConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatTextConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextNon_RepeatTextConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFilterInput = {
  feature_text?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFeature_TextFilterInput
  >;
  video?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideo = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideo';
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_Repeat
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_Repeat = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_repeat';
  video?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo
  >;
  video_image?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_Image
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatFilterInput = {
  video?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideoFilterInput
  >;
  video_image?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_ImageFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_repeatVideo';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideoConfig
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_Image = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_repeatVideo_image';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfig
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_repeatVideo_imageConfig';
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigConstraint
  >;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigConstraint = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_repeatVideo_imageConfigConstraint';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigFilterInput = {
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigConstraintFilterInput
  >;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideoConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_repeatVideoConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigFilterInput = {
  choices?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasHomeMainTitleFilterInput>;
  intro?: Maybe<SitePluginPluginOptionsSchemasHomeMainIntroFilterInput>;
  image?: Maybe<SitePluginPluginOptionsSchemasHomeMainImageFilterInput>;
  body?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainImage = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainImage';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainImageConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainImageConfig';
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainImageConfigConstraint
  >;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainImageConfigConstraint = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainImageConfigConstraint';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasHomeMainImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainImageConfigFilterInput = {
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasHomeMainImageConfigConstraintFilterInput
  >;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainIntro = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainIntro';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainIntroConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainIntroConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainIntroConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainIntroConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainIntroFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainIntroConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainTitleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProduct = {
  __typename?: 'SitePluginPluginOptionsSchemasProduct';
  Main?: Maybe<SitePluginPluginOptionsSchemasProductMain>;
};

export type SitePluginPluginOptionsSchemasProductFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasProductMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMain = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMain';
  uid?: Maybe<SitePluginPluginOptionsSchemasProductMainUid>;
  title?: Maybe<SitePluginPluginOptionsSchemasProductMainTitle>;
  intro?: Maybe<SitePluginPluginOptionsSchemasProductMainIntro>;
  image?: Maybe<SitePluginPluginOptionsSchemasProductMainImage>;
  body?: Maybe<SitePluginPluginOptionsSchemasProductMainBody>;
};

export type SitePluginPluginOptionsSchemasProductMainBody = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBody';
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainBodyConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfig';
  choices?: Maybe<SitePluginPluginOptionsSchemasProductMainBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoices = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoices';
  feature_text?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_Text
  >;
  video?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideo
  >;
  feature_text_button?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_Text_Button
  >;
  image_comparison?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_Comparison
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_Text = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_text';
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_Repeat
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_Text_Button = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_text_button';
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_Text_ButtonFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_Repeat = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_textNon_repeat';
  layout?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatLayout
  >;
  heading?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatHeading
  >;
  text?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatText
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatFilterInput = {
  layout?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatLayoutFilterInput
  >;
  heading?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatHeadingFilterInput
  >;
  text?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatTextFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatHeading = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_textNon_repeatHeading';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatHeadingConfig
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatHeadingConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_textNon_repeatHeadingConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatHeadingConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatHeadingFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatHeadingConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatLayout = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_textNon_repeatLayout';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatLayoutConfig
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatLayoutConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_textNon_repeatLayoutConfig';
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  default_value?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatLayoutConfigFilterInput = {
  options?: Maybe<StringQueryOperatorInput>;
  default_value?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatLayoutFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatLayoutConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatText = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_textNon_repeatText';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatTextConfig
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatTextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_textNon_repeatTextConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatTextConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextNon_RepeatTextConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFilterInput = {
  feature_text?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_TextFilterInput
  >;
  video?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoFilterInput
  >;
  feature_text_button?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFeature_Text_ButtonFilterInput
  >;
  image_comparison?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_Comparison = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_comparison';
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_Repeat
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_Repeat = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_comparisonNon_repeat';
  name?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatName
  >;
  before_image?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_Image
  >;
  after_image?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_Image
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_Image = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_comparisonNon_repeatAfter_image';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_ImageConfig
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_ImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_comparisonNon_repeatAfter_imageConfig';
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_ImageConfigConstraint
  >;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_ImageConfigConstraint = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_comparisonNon_repeatAfter_imageConfigConstraint';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_ImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_ImageConfigFilterInput = {
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_ImageConfigConstraintFilterInput
  >;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_ImageConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_Image = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_comparisonNon_repeatBefore_image';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_ImageConfig
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_ImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_comparisonNon_repeatBefore_imageConfig';
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_ImageConfigConstraint
  >;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_ImageConfigConstraint = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_comparisonNon_repeatBefore_imageConfigConstraint';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_ImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_ImageConfigFilterInput = {
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_ImageConfigConstraintFilterInput
  >;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_ImageConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatFilterInput = {
  name?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatNameFilterInput
  >;
  before_image?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatBefore_ImageFilterInput
  >;
  after_image?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatAfter_ImageFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatName = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_comparisonNon_repeatName';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatNameConfig
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatNameConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_comparisonNon_repeatNameConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatNameConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesImage_ComparisonNon_RepeatNameConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideo = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideo';
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_Repeat
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_Repeat = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_repeat';
  video?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo
  >;
  video_image?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_Image
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatFilterInput = {
  video?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideoFilterInput
  >;
  video_image?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_ImageFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_repeatVideo';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideoConfig
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_Image = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_repeatVideo_image';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfig
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_repeatVideo_imageConfig';
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigConstraint
  >;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigConstraint = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_repeatVideo_imageConfigConstraint';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigFilterInput = {
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigConstraintFilterInput
  >;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideo_ImageConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideoConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_repeatVideoConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyConfigFilterInput = {
  choices?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigChoicesFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainBodyConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainFilterInput = {
  uid?: Maybe<SitePluginPluginOptionsSchemasProductMainUidFilterInput>;
  title?: Maybe<SitePluginPluginOptionsSchemasProductMainTitleFilterInput>;
  intro?: Maybe<SitePluginPluginOptionsSchemasProductMainIntroFilterInput>;
  image?: Maybe<SitePluginPluginOptionsSchemasProductMainImageFilterInput>;
  body?: Maybe<SitePluginPluginOptionsSchemasProductMainBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainImage = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainImage';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainImageConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainImageConfig';
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasProductMainImageConfigConstraint
  >;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainImageConfigConstraint = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainImageConfigConstraint';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasProductMainImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainImageConfigFilterInput = {
  constraint?: Maybe<
    SitePluginPluginOptionsSchemasProductMainImageConfigConstraintFilterInput
  >;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainImageConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainIntro = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainIntro';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainIntroConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainIntroConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainIntroConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainIntroConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainIntroFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainIntroConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainTitleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasProductMainTitleConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasProductMainUid = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainUid';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainUidConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainUidConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainUidConfigFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  primaryNav?: Maybe<Array<Maybe<SiteSiteMetadataPrimaryNav>>>;
  secondaryNav?: Maybe<Array<Maybe<SiteSiteMetadataSecondaryNav>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  primaryNav?: Maybe<SiteSiteMetadataPrimaryNavFilterListInput>;
  secondaryNav?: Maybe<SiteSiteMetadataSecondaryNavFilterListInput>;
};

export type SiteSiteMetadataPrimaryNav = {
  __typename?: 'SiteSiteMetadataPrimaryNav';
  title?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataPrimaryNavFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPrimaryNavFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataPrimaryNavFilterInput>;
};

export type SiteSiteMetadataSecondaryNav = {
  __typename?: 'SiteSiteMetadataSecondaryNav';
  title?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSecondaryNavFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSecondaryNavFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataSecondaryNavFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};
export type Unnamed_1_QueryVariables = {};

export type Unnamed_1_Query = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'SiteSiteMetadata' } & {
          primaryNav: Maybe<
            Array<
              Maybe<
                { __typename?: 'SiteSiteMetadataPrimaryNav' } & Pick<
                  SiteSiteMetadataPrimaryNav,
                  'title' | 'link'
                >
              >
            >
          >;
          secondaryNav: Maybe<
            Array<
              Maybe<
                { __typename?: 'SiteSiteMetadataSecondaryNav' } & Pick<
                  SiteSiteMetadataSecondaryNav,
                  'title' | 'link'
                >
              >
            >
          >;
        }
      >;
    }
  >;
};

export type IndexQueryQueryVariables = {};

export type IndexQueryQuery = { __typename?: 'Query' } & {
  sanityPage: Maybe<
    { __typename?: 'SanityPage' } & Pick<SanityPage, 'id' | 'title'> & {
        hero: Maybe<
          { __typename?: 'SanityHero' } & Pick<
            SanityHero,
            'title' | 'intro'
          > & {
              image: Maybe<
                { __typename?: 'SanityMainImage' } & {
                  asset: Maybe<
                    { __typename?: 'SanityImageAsset' } & {
                      fluid: Maybe<
                        {
                          __typename?: 'SanityImageFluid';
                        } & GatsbySanityImageFluidFragment
                      >;
                      metadata: Maybe<
                        { __typename?: 'SanityImageMetadata' } & {
                          palette: Maybe<
                            { __typename?: 'SanityImagePalette' } & {
                              dominant: Maybe<
                                {
                                  __typename?: 'SanityImagePaletteSwatch';
                                } & Pick<SanityImagePaletteSwatch, 'background'>
                              >;
                            }
                          >;
                        }
                      >;
                    }
                  >;
                }
              >;
            }
        >;
        modules: Maybe<
          Array<
            Maybe<
              | ({ __typename?: 'SanityFeatureText' } & Pick<
                  SanityFeatureText,
                  '_key' | '_type' | 'layout' | 'heading' | 'text'
                >)
              | ({ __typename?: 'SanityVimeo' } & Pick<
                  SanityVimeo,
                  '_key' | '_type'
                > & {
                    image: Maybe<
                      { __typename?: 'SanityMainImage' } & {
                        asset: Maybe<
                          { __typename?: 'SanityImageAsset' } & {
                            fluid: Maybe<
                              {
                                __typename?: 'SanityImageFluid';
                              } & GatsbySanityImageFluidFragment
                            >;
                          }
                        >;
                      }
                    >;
                  })
            >
          >
        >;
      }
  >;
};

export type ProductQueryQueryVariables = {
  uid: Scalars['String'];
};

export type ProductQueryQuery = { __typename?: 'Query' } & {
  prismicProduct: Maybe<
    { __typename?: 'PrismicProduct' } & {
      data: Maybe<
        { __typename?: 'PrismicProductDataType' } & {
          intro: Maybe<
            { __typename?: 'PrismicStructuredTextType' } & Pick<
              PrismicStructuredTextType,
              'text'
            >
          >;
          title: Maybe<
            { __typename?: 'PrismicStructuredTextType' } & Pick<
              PrismicStructuredTextType,
              'text'
            >
          >;
          image: Maybe<
            { __typename?: 'PrismicImageType' } & {
              localFile: Maybe<
                { __typename?: 'File' } & {
                  childImageSharp: Maybe<
                    { __typename?: 'ImageSharp' } & {
                      fluid: Maybe<
                        {
                          __typename?: 'ImageSharpFluid';
                        } & GatsbyImageSharpFluid_WithWebpFragment
                      >;
                    }
                  >;
                }
              >;
            }
          >;
          body: Maybe<
            Array<
              Maybe<
                { __typename?: 'PrismicProductBodyImageComparison' } & Pick<
                  PrismicProductBodyImageComparison,
                  'id' | 'slice_type'
                > & {
                    primary: Maybe<
                      {
                        __typename?: 'PrismicProductBodyImageComparisonPrimaryType';
                      } & {
                        name: Maybe<
                          { __typename?: 'PrismicStructuredTextType' } & Pick<
                            PrismicStructuredTextType,
                            'text'
                          >
                        >;
                        before_image: Maybe<
                          { __typename?: 'PrismicImageType' } & {
                            localFile: Maybe<
                              { __typename?: 'File' } & {
                                childImageSharp: Maybe<
                                  { __typename?: 'ImageSharp' } & {
                                    fluid: Maybe<
                                      {
                                        __typename?: 'ImageSharpFluid';
                                      } & GatsbyImageSharpFluid_WithWebpFragment
                                    >;
                                  }
                                >;
                              }
                            >;
                          }
                        >;
                        after_image: Maybe<
                          { __typename?: 'PrismicImageType' } & {
                            localFile: Maybe<
                              { __typename?: 'File' } & {
                                childImageSharp: Maybe<
                                  { __typename?: 'ImageSharp' } & {
                                    fluid: Maybe<
                                      {
                                        __typename?: 'ImageSharpFluid';
                                      } & GatsbyImageSharpFluid_WithWebpFragment
                                    >;
                                  }
                                >;
                              }
                            >;
                          }
                        >;
                      }
                    >;
                  }
              >
            >
          >;
        }
      >;
    }
  >;
};

export type GatsbySanityImageFixedFragment = {
  __typename?: 'SanityImageFixed';
} & Pick<
  SanityImageFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbySanityImageFixed_NoBase64Fragment = {
  __typename?: 'SanityImageFixed';
} & Pick<
  SanityImageFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbySanityImageFixed_WithWebpFragment = {
  __typename?: 'SanityImageFixed';
} & Pick<
  SanityImageFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbySanityImageFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'SanityImageFixed';
} & Pick<
  SanityImageFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbySanityImageFluidFragment = {
  __typename?: 'SanityImageFluid';
} & Pick<
  SanityImageFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbySanityImageFluid_NoBase64Fragment = {
  __typename?: 'SanityImageFluid';
} & Pick<
  SanityImageFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbySanityImageFluid_WithWebpFragment = {
  __typename?: 'SanityImageFluid';
} & Pick<
  SanityImageFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbySanityImageFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'SanityImageFluid';
} & Pick<
  SanityImageFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFixedFragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFluidFragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpResolutionsFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpSizesFragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebpFragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;
