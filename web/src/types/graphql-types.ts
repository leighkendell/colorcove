export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
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
  birthtime = 'birthtime'
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
   __typename?: 'File',
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  url?: Maybe<Scalars['String']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
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
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  url = 'url',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
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
  internal___type = 'internal___type'
}

export type FileFilterInput = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
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
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export type ImageSharp = Node & {
   __typename?: 'ImageSharp',
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
   __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
   __typename?: 'ImageSharpEdge',
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
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
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
   __typename?: 'ImageSharpFixed',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
   __typename?: 'ImageSharpFluid',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
   __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
   __typename?: 'ImageSharpOriginal',
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
   __typename?: 'ImageSharpResize',
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
   __typename?: 'ImageSharpResolutions',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
   __typename?: 'ImageSharpSizes',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type Query = {
   __typename?: 'Query',
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  file?: Maybe<File>,
  allFile: FileConnection,
  sanityPage?: Maybe<SanityPage>,
  allSanityPage: SanityPageConnection,
  sanityPdf?: Maybe<SanityPdf>,
  allSanityPdf: SanityPdfConnection,
  sanityProduct?: Maybe<SanityProduct>,
  allSanityProduct: SanityProductConnection,
  sanityFileAsset?: Maybe<SanityFileAsset>,
  allSanityFileAsset: SanityFileAssetConnection,
  sanityImageAsset?: Maybe<SanityImageAsset>,
  allSanityImageAsset: SanityImageAssetConnection,
  sanitySiteSettings?: Maybe<SanitySiteSettings>,
  allSanitySiteSettings: SanitySiteSettingsConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  shopifyCollection?: Maybe<ShopifyCollection>,
  allShopifyCollection: ShopifyCollectionConnection,
  shopifyProduct?: Maybe<ShopifyProduct>,
  allShopifyProduct: ShopifyProductConnection,
  shopifyProductVariant?: Maybe<ShopifyProductVariant>,
  allShopifyProductVariant: ShopifyProductVariantConnection,
  shopifyProductOption?: Maybe<ShopifyProductOption>,
  allShopifyProductOption: ShopifyProductOptionConnection,
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryFileArgs = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<SanityMainImageFilterInput>,
  hero?: Maybe<SanityHeroFilterInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawImage?: Maybe<JsonQueryOperatorInput>,
  _rawHero?: Maybe<JsonQueryOperatorInput>,
  _rawModules?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityPageArgs = {
  filter?: Maybe<SanityPageFilterInput>,
  sort?: Maybe<SanityPageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityPdfArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<SanityRichTextFilterInput>,
  file?: Maybe<SanityFileFilterInput>,
  pdfButton?: Maybe<StringQueryOperatorInput>,
  _rawContent?: Maybe<JsonQueryOperatorInput>,
  _rawFile?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityPdfArgs = {
  filter?: Maybe<SanityPdfFilterInput>,
  sort?: Maybe<SanityPdfSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityProductArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<SanityMainImageFilterInput>,
  hero?: Maybe<SanityHeroFilterInput>,
  shopifyId?: Maybe<FloatQueryOperatorInput>,
  shopifyHandle?: Maybe<StringQueryOperatorInput>,
  shopifyDefaultVariant?: Maybe<SanityShopifyVariantFilterInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawImage?: Maybe<JsonQueryOperatorInput>,
  _rawHero?: Maybe<JsonQueryOperatorInput>,
  _rawModules?: Maybe<JsonQueryOperatorInput>,
  _rawShopifyDefaultVariant?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityProductArgs = {
  filter?: Maybe<SanityProductFilterInput>,
  sort?: Maybe<SanityProductSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>,
  sort?: Maybe<SanityFileAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  metadata?: Maybe<SanityImageMetadataFilterInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  fixed?: Maybe<SanityImageFixedFilterInput>,
  fluid?: Maybe<SanityImageFluidFilterInput>,
  _rawMetadata?: Maybe<JsonQueryOperatorInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>
};


export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>,
  sort?: Maybe<SanityImageAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanitySiteSettingsArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  primaryNav?: Maybe<SanityNavGroupFilterInput>,
  secondaryNav?: Maybe<SanityNavGroupFilterInput>,
  social?: Maybe<SanitySocialFilterInput>,
  seo?: Maybe<SanitySeoFilterInput>,
  promo?: Maybe<SanityRichTextFilterInput>,
  _rawPrimaryNav?: Maybe<JsonQueryOperatorInput>,
  _rawSecondaryNav?: Maybe<JsonQueryOperatorInput>,
  _rawSocial?: Maybe<JsonQueryOperatorInput>,
  _rawSeo?: Maybe<JsonQueryOperatorInput>,
  _rawPromo?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanitySiteSettingsArgs = {
  filter?: Maybe<SanitySiteSettingsFilterInput>,
  sort?: Maybe<SanitySiteSettingsSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryShopifyCollectionArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  descriptionHtml?: Maybe<StringQueryOperatorInput>,
  handle?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  shopifyId?: Maybe<StringQueryOperatorInput>,
  products?: Maybe<ShopifyProductFilterListInput>
};


export type QueryAllShopifyCollectionArgs = {
  filter?: Maybe<ShopifyCollectionFilterInput>,
  sort?: Maybe<ShopifyCollectionSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryShopifyProductArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  availableForSale?: Maybe<BooleanQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  descriptionHtml?: Maybe<StringQueryOperatorInput>,
  handle?: Maybe<StringQueryOperatorInput>,
  images?: Maybe<ShopifyProductImagesFilterListInput>,
  priceRange?: Maybe<ShopifyProductPriceRangeFilterInput>,
  productType?: Maybe<StringQueryOperatorInput>,
  publishedAt?: Maybe<DateQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  vendor?: Maybe<StringQueryOperatorInput>,
  shopifyId?: Maybe<StringQueryOperatorInput>,
  variants?: Maybe<ShopifyProductVariantFilterListInput>,
  options?: Maybe<ShopifyProductOptionFilterListInput>
};


export type QueryAllShopifyProductArgs = {
  filter?: Maybe<ShopifyProductFilterInput>,
  sort?: Maybe<ShopifyProductSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryShopifyProductVariantArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  availableForSale?: Maybe<BooleanQueryOperatorInput>,
  image?: Maybe<ShopifyProductVariantImageFilterInput>,
  price?: Maybe<StringQueryOperatorInput>,
  selectedOptions?: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>,
  sku?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  weight?: Maybe<IntQueryOperatorInput>,
  weightUnit?: Maybe<StringQueryOperatorInput>,
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPricesFilterInput>,
  shopifyId?: Maybe<StringQueryOperatorInput>
};


export type QueryAllShopifyProductVariantArgs = {
  filter?: Maybe<ShopifyProductVariantFilterInput>,
  sort?: Maybe<ShopifyProductVariantSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryShopifyProductOptionArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  values?: Maybe<StringQueryOperatorInput>,
  shopifyId?: Maybe<StringQueryOperatorInput>
};


export type QueryAllShopifyProductOptionArgs = {
  filter?: Maybe<ShopifyProductOptionFilterInput>,
  sort?: Maybe<ShopifyProductOptionSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type SanityAssetSourceData = {
   __typename?: 'SanityAssetSourceData',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  sanityId?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type SanityAssetSourceDataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  sanityId?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type SanityBlock = {
   __typename?: 'SanityBlock',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  sanityChildren?: Maybe<Array<Maybe<SanitySpan>>>,
  style?: Maybe<Scalars['String']>,
  list?: Maybe<Scalars['String']>,
};

export type SanityBlockFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  sanityChildren?: Maybe<SanitySpanFilterListInput>,
  style?: Maybe<StringQueryOperatorInput>,
  list?: Maybe<StringQueryOperatorInput>,
};

export type SanityBlockFilterListInput = {
  elemMatch?: Maybe<SanityBlockFilterInput>,
};

export type SanityBlockOrInlineImage = SanityBlock | SanityInlineImage;

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
};

export type SanityFeatureText = {
   __typename?: 'SanityFeatureText',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  layout?: Maybe<Scalars['String']>,
  heading?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
};

export type SanityFeatureTextGroup = {
   __typename?: 'SanityFeatureTextGroup',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  items?: Maybe<Array<Maybe<SanityFeatureTextGroupText>>>,
};

export type SanityFeatureTextGroupText = {
   __typename?: 'SanityFeatureTextGroupText',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  heading?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
};

export type SanityFeatureTextOrFeatureTextGroupOrFormOrGridListOrImageComparisonOrImageComparisonGroupOrInlineImageOrProductGroupOrRichTextOrVimeo = SanityFeatureText | SanityFeatureTextGroup | SanityForm | SanityGridList | SanityImageComparison | SanityImageComparisonGroup | SanityInlineImage | SanityProductGroup | SanityRichText | SanityVimeo;

export type SanityFile = {
   __typename?: 'SanityFile',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  asset?: Maybe<SanityFileAsset>,
};

export type SanityFileAsset = SanityDocument & Node & {
   __typename?: 'SanityFileAsset',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  originalFilename?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  sha1hash?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  assetId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  source?: Maybe<SanityAssetSourceData>,
  _rawSource?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityFileAssetConnection = {
   __typename?: 'SanityFileAssetConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityFileAssetEdge>,
  nodes: Array<SanityFileAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityFileAssetGroupConnection>,
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityFileAssetFieldsEnum
};

export type SanityFileAssetEdge = {
   __typename?: 'SanityFileAssetEdge',
  next?: Maybe<SanityFileAsset>,
  node: SanityFileAsset,
  previous?: Maybe<SanityFileAsset>,
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
  title = 'title',
  description = 'description',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  source____key = 'source____key',
  source____type = 'source____type',
  source___name = 'source___name',
  source___sanityId = 'source___sanityId',
  source___url = 'source___url',
  _rawSource = '_rawSource',
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
  internal___type = 'internal___type'
}

export type SanityFileAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityFileAssetGroupConnection = {
   __typename?: 'SanityFileAssetGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityFileAssetEdge>,
  nodes: Array<SanityFileAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityFileFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  asset?: Maybe<SanityFileAssetFilterInput>,
};

export type SanityForm = {
   __typename?: 'SanityForm',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type SanityGeopoint = {
   __typename?: 'SanityGeopoint',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  alt?: Maybe<Scalars['Float']>,
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  lat?: Maybe<FloatQueryOperatorInput>,
  lng?: Maybe<FloatQueryOperatorInput>,
  alt?: Maybe<FloatQueryOperatorInput>,
};

export type SanityGridList = {
   __typename?: 'SanityGridList',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  heading?: Maybe<Scalars['String']>,
  listItems?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SanityHero = {
   __typename?: 'SanityHero',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  intro?: Maybe<Scalars['String']>,
  image?: Maybe<SanityMainImage>,
  button?: Maybe<SanityHeroButton>,
};

export type SanityHeroButton = {
   __typename?: 'SanityHeroButton',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  link?: Maybe<SanityPage>,
};

export type SanityHeroButtonFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  text?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<SanityPageFilterInput>,
};

export type SanityHeroFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  intro?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<SanityMainImageFilterInput>,
  button?: Maybe<SanityHeroButtonFilterInput>,
};

export type SanityImage = {
   __typename?: 'SanityImage',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  asset?: Maybe<SanityImageAsset>,
  hotspot?: Maybe<SanityImageHotspot>,
  crop?: Maybe<SanityImageCrop>,
};

export type SanityImageAsset = SanityDocument & Node & {
   __typename?: 'SanityImageAsset',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  originalFilename?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  sha1hash?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  assetId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  metadata?: Maybe<SanityImageMetadata>,
  source?: Maybe<SanityAssetSourceData>,
  fixed?: Maybe<SanityImageFixed>,
  fluid?: Maybe<SanityImageFluid>,
  _rawMetadata?: Maybe<Scalars['JSON']>,
  _rawSource?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childImageSharp?: Maybe<ImageSharp>,
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityImageAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<SanityImageFormat>
};


export type SanityImageAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  sizes?: Maybe<Scalars['String']>,
  toFormat?: Maybe<SanityImageFormat>
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityImageAssetConnection = {
   __typename?: 'SanityImageAssetConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityImageAssetEdge>,
  nodes: Array<SanityImageAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityImageAssetGroupConnection>,
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityImageAssetFieldsEnum
};

export type SanityImageAssetEdge = {
   __typename?: 'SanityImageAssetEdge',
  next?: Maybe<SanityImageAsset>,
  node: SanityImageAsset,
  previous?: Maybe<SanityImageAsset>,
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
  title = 'title',
  description = 'description',
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
  source____key = 'source____key',
  source____type = 'source____type',
  source___name = 'source___name',
  source___sanityId = 'source___sanityId',
  source___url = 'source___url',
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
  _rawSource = '_rawSource',
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
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type'
}

export type SanityImageAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  metadata?: Maybe<SanityImageMetadataFilterInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  fixed?: Maybe<SanityImageFixedFilterInput>,
  fluid?: Maybe<SanityImageFluidFilterInput>,
  _rawMetadata?: Maybe<JsonQueryOperatorInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
};

export type SanityImageAssetGroupConnection = {
   __typename?: 'SanityImageAssetGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityImageAssetEdge>,
  nodes: Array<SanityImageAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityImageComparison = {
   __typename?: 'SanityImageComparison',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  beforeImage?: Maybe<SanityMainImage>,
  afterImage?: Maybe<SanityMainImage>,
};

export type SanityImageComparisonGroup = {
   __typename?: 'SanityImageComparisonGroup',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  items?: Maybe<Array<Maybe<SanityImageComparison>>>,
};

export type SanityImageCrop = {
   __typename?: 'SanityImageCrop',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  top?: Maybe<Scalars['Float']>,
  bottom?: Maybe<Scalars['Float']>,
  left?: Maybe<Scalars['Float']>,
  right?: Maybe<Scalars['Float']>,
};

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  top?: Maybe<FloatQueryOperatorInput>,
  bottom?: Maybe<FloatQueryOperatorInput>,
  left?: Maybe<FloatQueryOperatorInput>,
  right?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageDimensions = {
   __typename?: 'SanityImageDimensions',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  aspectRatio?: Maybe<Scalars['Float']>,
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageFixed = {
   __typename?: 'SanityImageFixed',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type SanityImageFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type SanityImageFluid = {
   __typename?: 'SanityImageFluid',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SanityImageFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export enum SanityImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export type SanityImageHotspot = {
   __typename?: 'SanityImageHotspot',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  x?: Maybe<Scalars['Float']>,
  y?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  x?: Maybe<FloatQueryOperatorInput>,
  y?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageMetadata = {
   __typename?: 'SanityImageMetadata',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  location?: Maybe<SanityGeopoint>,
  dimensions?: Maybe<SanityImageDimensions>,
  palette?: Maybe<SanityImagePalette>,
  lqip?: Maybe<Scalars['String']>,
  hasAlpha?: Maybe<Scalars['Boolean']>,
  isOpaque?: Maybe<Scalars['Boolean']>,
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  location?: Maybe<SanityGeopointFilterInput>,
  dimensions?: Maybe<SanityImageDimensionsFilterInput>,
  palette?: Maybe<SanityImagePaletteFilterInput>,
  lqip?: Maybe<StringQueryOperatorInput>,
  hasAlpha?: Maybe<BooleanQueryOperatorInput>,
  isOpaque?: Maybe<BooleanQueryOperatorInput>,
};

export type SanityImagePalette = {
   __typename?: 'SanityImagePalette',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  darkMuted?: Maybe<SanityImagePaletteSwatch>,
  lightVibrant?: Maybe<SanityImagePaletteSwatch>,
  darkVibrant?: Maybe<SanityImagePaletteSwatch>,
  vibrant?: Maybe<SanityImagePaletteSwatch>,
  dominant?: Maybe<SanityImagePaletteSwatch>,
  lightMuted?: Maybe<SanityImagePaletteSwatch>,
  muted?: Maybe<SanityImagePaletteSwatch>,
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>,
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>,
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>,
};

export type SanityImagePaletteSwatch = {
   __typename?: 'SanityImagePaletteSwatch',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  foreground?: Maybe<Scalars['String']>,
  population?: Maybe<Scalars['Float']>,
  title?: Maybe<Scalars['String']>,
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  background?: Maybe<StringQueryOperatorInput>,
  foreground?: Maybe<StringQueryOperatorInput>,
  population?: Maybe<FloatQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SanityInlineImage = {
   __typename?: 'SanityInlineImage',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  alt?: Maybe<Scalars['String']>,
  image?: Maybe<SanityMainImage>,
};

export type SanityMainImage = {
   __typename?: 'SanityMainImage',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  asset?: Maybe<SanityImageAsset>,
  hotspot?: Maybe<SanityImageHotspot>,
  crop?: Maybe<SanityImageCrop>,
};

export type SanityMainImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  asset?: Maybe<SanityImageAssetFilterInput>,
  hotspot?: Maybe<SanityImageHotspotFilterInput>,
  crop?: Maybe<SanityImageCropFilterInput>,
};

export type SanityNavGroup = {
   __typename?: 'SanityNavGroup',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  pages?: Maybe<Array<Maybe<SanityPageReference>>>,
};

export type SanityNavGroupFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  pages?: Maybe<SanityPageReferenceFilterListInput>,
};

export type SanityPage = SanityDocument & Node & {
   __typename?: 'SanityPage',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<SanitySlug>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<SanityMainImage>,
  hero?: Maybe<SanityHero>,
  modules?: Maybe<Array<Maybe<SanityFeatureTextOrFeatureTextGroupOrFormOrGridListOrImageComparisonOrImageComparisonGroupOrInlineImageOrProductGroupOrRichTextOrVimeo>>>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawImage?: Maybe<Scalars['JSON']>,
  _rawHero?: Maybe<Scalars['JSON']>,
  _rawModules?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPage_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPage_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPage_RawHeroArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPage_RawModulesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityPageConnection = {
   __typename?: 'SanityPageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityPageEdge>,
  nodes: Array<SanityPage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityPageGroupConnection>,
};


export type SanityPageConnectionDistinctArgs = {
  field: SanityPageFieldsEnum
};


export type SanityPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityPageFieldsEnum
};

export type SanityPageEdge = {
   __typename?: 'SanityPageEdge',
  next?: Maybe<SanityPage>,
  node: SanityPage,
  previous?: Maybe<SanityPage>,
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
  description = 'description',
  image____key = 'image____key',
  image____type = 'image____type',
  image___asset____id = 'image___asset____id',
  image___asset____type = 'image___asset____type',
  image___asset____createdAt = 'image___asset____createdAt',
  image___asset____updatedAt = 'image___asset____updatedAt',
  image___asset____rev = 'image___asset____rev',
  image___asset____key = 'image___asset____key',
  image___asset___originalFilename = 'image___asset___originalFilename',
  image___asset___label = 'image___asset___label',
  image___asset___title = 'image___asset___title',
  image___asset___description = 'image___asset___description',
  image___asset___sha1hash = 'image___asset___sha1hash',
  image___asset___extension = 'image___asset___extension',
  image___asset___mimeType = 'image___asset___mimeType',
  image___asset___size = 'image___asset___size',
  image___asset___assetId = 'image___asset___assetId',
  image___asset___path = 'image___asset___path',
  image___asset___url = 'image___asset___url',
  image___asset___metadata____key = 'image___asset___metadata____key',
  image___asset___metadata____type = 'image___asset___metadata____type',
  image___asset___metadata___lqip = 'image___asset___metadata___lqip',
  image___asset___metadata___hasAlpha = 'image___asset___metadata___hasAlpha',
  image___asset___metadata___isOpaque = 'image___asset___metadata___isOpaque',
  image___asset___source____key = 'image___asset___source____key',
  image___asset___source____type = 'image___asset___source____type',
  image___asset___source___name = 'image___asset___source___name',
  image___asset___source___sanityId = 'image___asset___source___sanityId',
  image___asset___source___url = 'image___asset___source___url',
  image___asset___fixed___base64 = 'image___asset___fixed___base64',
  image___asset___fixed___aspectRatio = 'image___asset___fixed___aspectRatio',
  image___asset___fixed___width = 'image___asset___fixed___width',
  image___asset___fixed___height = 'image___asset___fixed___height',
  image___asset___fixed___src = 'image___asset___fixed___src',
  image___asset___fixed___srcSet = 'image___asset___fixed___srcSet',
  image___asset___fixed___srcWebp = 'image___asset___fixed___srcWebp',
  image___asset___fixed___srcSetWebp = 'image___asset___fixed___srcSetWebp',
  image___asset___fluid___base64 = 'image___asset___fluid___base64',
  image___asset___fluid___aspectRatio = 'image___asset___fluid___aspectRatio',
  image___asset___fluid___src = 'image___asset___fluid___src',
  image___asset___fluid___srcSet = 'image___asset___fluid___srcSet',
  image___asset___fluid___srcWebp = 'image___asset___fluid___srcWebp',
  image___asset___fluid___srcSetWebp = 'image___asset___fluid___srcSetWebp',
  image___asset___fluid___sizes = 'image___asset___fluid___sizes',
  image___asset____rawMetadata = 'image___asset____rawMetadata',
  image___asset____rawSource = 'image___asset____rawSource',
  image___asset___id = 'image___asset___id',
  image___asset___parent___id = 'image___asset___parent___id',
  image___asset___parent___children = 'image___asset___parent___children',
  image___asset___children = 'image___asset___children',
  image___asset___children___id = 'image___asset___children___id',
  image___asset___children___children = 'image___asset___children___children',
  image___asset___internal___content = 'image___asset___internal___content',
  image___asset___internal___contentDigest = 'image___asset___internal___contentDigest',
  image___asset___internal___description = 'image___asset___internal___description',
  image___asset___internal___fieldOwners = 'image___asset___internal___fieldOwners',
  image___asset___internal___ignoreType = 'image___asset___internal___ignoreType',
  image___asset___internal___mediaType = 'image___asset___internal___mediaType',
  image___asset___internal___owner = 'image___asset___internal___owner',
  image___asset___internal___type = 'image___asset___internal___type',
  image___asset___childImageSharp___id = 'image___asset___childImageSharp___id',
  image___asset___childImageSharp___children = 'image___asset___childImageSharp___children',
  image___hotspot____key = 'image___hotspot____key',
  image___hotspot____type = 'image___hotspot____type',
  image___hotspot___x = 'image___hotspot___x',
  image___hotspot___y = 'image___hotspot___y',
  image___hotspot___height = 'image___hotspot___height',
  image___hotspot___width = 'image___hotspot___width',
  image___crop____key = 'image___crop____key',
  image___crop____type = 'image___crop____type',
  image___crop___top = 'image___crop___top',
  image___crop___bottom = 'image___crop___bottom',
  image___crop___left = 'image___crop___left',
  image___crop___right = 'image___crop___right',
  hero____key = 'hero____key',
  hero____type = 'hero____type',
  hero___title = 'hero___title',
  hero___intro = 'hero___intro',
  hero___image____key = 'hero___image____key',
  hero___image____type = 'hero___image____type',
  hero___image___asset____id = 'hero___image___asset____id',
  hero___image___asset____type = 'hero___image___asset____type',
  hero___image___asset____createdAt = 'hero___image___asset____createdAt',
  hero___image___asset____updatedAt = 'hero___image___asset____updatedAt',
  hero___image___asset____rev = 'hero___image___asset____rev',
  hero___image___asset____key = 'hero___image___asset____key',
  hero___image___asset___originalFilename = 'hero___image___asset___originalFilename',
  hero___image___asset___label = 'hero___image___asset___label',
  hero___image___asset___title = 'hero___image___asset___title',
  hero___image___asset___description = 'hero___image___asset___description',
  hero___image___asset___sha1hash = 'hero___image___asset___sha1hash',
  hero___image___asset___extension = 'hero___image___asset___extension',
  hero___image___asset___mimeType = 'hero___image___asset___mimeType',
  hero___image___asset___size = 'hero___image___asset___size',
  hero___image___asset___assetId = 'hero___image___asset___assetId',
  hero___image___asset___path = 'hero___image___asset___path',
  hero___image___asset___url = 'hero___image___asset___url',
  hero___image___asset____rawMetadata = 'hero___image___asset____rawMetadata',
  hero___image___asset____rawSource = 'hero___image___asset____rawSource',
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
  hero___button____key = 'hero___button____key',
  hero___button____type = 'hero___button____type',
  hero___button___text = 'hero___button___text',
  hero___button___link____id = 'hero___button___link____id',
  hero___button___link____type = 'hero___button___link____type',
  hero___button___link____createdAt = 'hero___button___link____createdAt',
  hero___button___link____updatedAt = 'hero___button___link____updatedAt',
  hero___button___link____rev = 'hero___button___link____rev',
  hero___button___link____key = 'hero___button___link____key',
  hero___button___link___title = 'hero___button___link___title',
  hero___button___link___description = 'hero___button___link___description',
  hero___button___link____rawSlug = 'hero___button___link____rawSlug',
  hero___button___link____rawImage = 'hero___button___link____rawImage',
  hero___button___link____rawHero = 'hero___button___link____rawHero',
  hero___button___link____rawModules = 'hero___button___link____rawModules',
  hero___button___link___id = 'hero___button___link___id',
  hero___button___link___children = 'hero___button___link___children',
  _rawSlug = '_rawSlug',
  _rawImage = '_rawImage',
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
  internal___type = 'internal___type'
}

export type SanityPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<SanityMainImageFilterInput>,
  hero?: Maybe<SanityHeroFilterInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawImage?: Maybe<JsonQueryOperatorInput>,
  _rawHero?: Maybe<JsonQueryOperatorInput>,
  _rawModules?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityPageGroupConnection = {
   __typename?: 'SanityPageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityPageEdge>,
  nodes: Array<SanityPage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityPageReference = {
   __typename?: 'SanityPageReference',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  page?: Maybe<SanityPage>,
};

export type SanityPageReferenceFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  page?: Maybe<SanityPageFilterInput>,
};

export type SanityPageReferenceFilterListInput = {
  elemMatch?: Maybe<SanityPageReferenceFilterInput>,
};

export type SanityPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityPageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityPdf = SanityDocument & Node & {
   __typename?: 'SanityPdf',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<SanityRichText>,
  file?: Maybe<SanityFile>,
  pdfButton?: Maybe<Scalars['String']>,
  _rawContent?: Maybe<Scalars['JSON']>,
  _rawFile?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityPdf_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPdf_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPdf_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPdf_RawFileArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityPdfConnection = {
   __typename?: 'SanityPdfConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityPdfEdge>,
  nodes: Array<SanityPdf>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityPdfGroupConnection>,
};


export type SanityPdfConnectionDistinctArgs = {
  field: SanityPdfFieldsEnum
};


export type SanityPdfConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityPdfFieldsEnum
};

export type SanityPdfEdge = {
   __typename?: 'SanityPdfEdge',
  next?: Maybe<SanityPdf>,
  node: SanityPdf,
  previous?: Maybe<SanityPdf>,
};

export enum SanityPdfFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  content____key = 'content____key',
  content____type = 'content____type',
  content___blocks = 'content___blocks',
  content___blocks____key = 'content___blocks____key',
  content___blocks____type = 'content___blocks____type',
  content___blocks___sanityChildren = 'content___blocks___sanityChildren',
  content___blocks___sanityChildren____key = 'content___blocks___sanityChildren____key',
  content___blocks___sanityChildren____type = 'content___blocks___sanityChildren____type',
  content___blocks___sanityChildren___marks = 'content___blocks___sanityChildren___marks',
  content___blocks___sanityChildren___text = 'content___blocks___sanityChildren___text',
  content___blocks___style = 'content___blocks___style',
  content___blocks___list = 'content___blocks___list',
  file____key = 'file____key',
  file____type = 'file____type',
  file___asset____id = 'file___asset____id',
  file___asset____type = 'file___asset____type',
  file___asset____createdAt = 'file___asset____createdAt',
  file___asset____updatedAt = 'file___asset____updatedAt',
  file___asset____rev = 'file___asset____rev',
  file___asset____key = 'file___asset____key',
  file___asset___originalFilename = 'file___asset___originalFilename',
  file___asset___label = 'file___asset___label',
  file___asset___title = 'file___asset___title',
  file___asset___description = 'file___asset___description',
  file___asset___sha1hash = 'file___asset___sha1hash',
  file___asset___extension = 'file___asset___extension',
  file___asset___mimeType = 'file___asset___mimeType',
  file___asset___size = 'file___asset___size',
  file___asset___assetId = 'file___asset___assetId',
  file___asset___path = 'file___asset___path',
  file___asset___url = 'file___asset___url',
  file___asset___source____key = 'file___asset___source____key',
  file___asset___source____type = 'file___asset___source____type',
  file___asset___source___name = 'file___asset___source___name',
  file___asset___source___sanityId = 'file___asset___source___sanityId',
  file___asset___source___url = 'file___asset___source___url',
  file___asset____rawSource = 'file___asset____rawSource',
  file___asset___id = 'file___asset___id',
  file___asset___parent___id = 'file___asset___parent___id',
  file___asset___parent___children = 'file___asset___parent___children',
  file___asset___children = 'file___asset___children',
  file___asset___children___id = 'file___asset___children___id',
  file___asset___children___children = 'file___asset___children___children',
  file___asset___internal___content = 'file___asset___internal___content',
  file___asset___internal___contentDigest = 'file___asset___internal___contentDigest',
  file___asset___internal___description = 'file___asset___internal___description',
  file___asset___internal___fieldOwners = 'file___asset___internal___fieldOwners',
  file___asset___internal___ignoreType = 'file___asset___internal___ignoreType',
  file___asset___internal___mediaType = 'file___asset___internal___mediaType',
  file___asset___internal___owner = 'file___asset___internal___owner',
  file___asset___internal___type = 'file___asset___internal___type',
  pdfButton = 'pdfButton',
  _rawContent = '_rawContent',
  _rawFile = '_rawFile',
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
  internal___type = 'internal___type'
}

export type SanityPdfFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<SanityRichTextFilterInput>,
  file?: Maybe<SanityFileFilterInput>,
  pdfButton?: Maybe<StringQueryOperatorInput>,
  _rawContent?: Maybe<JsonQueryOperatorInput>,
  _rawFile?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityPdfGroupConnection = {
   __typename?: 'SanityPdfGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityPdfEdge>,
  nodes: Array<SanityPdf>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityPdfSortInput = {
  fields?: Maybe<Array<Maybe<SanityPdfFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityProduct = SanityDocument & Node & {
   __typename?: 'SanityProduct',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<SanitySlug>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<SanityMainImage>,
  hero?: Maybe<SanityHero>,
  modules?: Maybe<Array<Maybe<SanityFeatureTextOrFeatureTextGroupOrFormOrGridListOrImageComparisonOrImageComparisonGroupOrInlineImageOrProductGroupOrRichTextOrVimeo>>>,
  shopifyId?: Maybe<Scalars['Float']>,
  shopifyHandle?: Maybe<Scalars['String']>,
  shopifyDefaultVariant?: Maybe<SanityShopifyVariant>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawImage?: Maybe<Scalars['JSON']>,
  _rawHero?: Maybe<Scalars['JSON']>,
  _rawModules?: Maybe<Scalars['JSON']>,
  _rawShopifyDefaultVariant?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityProduct_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityProduct_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityProduct_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityProduct_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityProduct_RawHeroArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityProduct_RawModulesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityProduct_RawShopifyDefaultVariantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityProductConnection = {
   __typename?: 'SanityProductConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityProductEdge>,
  nodes: Array<SanityProduct>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityProductGroupConnection>,
};


export type SanityProductConnectionDistinctArgs = {
  field: SanityProductFieldsEnum
};


export type SanityProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityProductFieldsEnum
};

export type SanityProductEdge = {
   __typename?: 'SanityProductEdge',
  next?: Maybe<SanityProduct>,
  node: SanityProduct,
  previous?: Maybe<SanityProduct>,
};

export enum SanityProductFieldsEnum {
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
  description = 'description',
  image____key = 'image____key',
  image____type = 'image____type',
  image___asset____id = 'image___asset____id',
  image___asset____type = 'image___asset____type',
  image___asset____createdAt = 'image___asset____createdAt',
  image___asset____updatedAt = 'image___asset____updatedAt',
  image___asset____rev = 'image___asset____rev',
  image___asset____key = 'image___asset____key',
  image___asset___originalFilename = 'image___asset___originalFilename',
  image___asset___label = 'image___asset___label',
  image___asset___title = 'image___asset___title',
  image___asset___description = 'image___asset___description',
  image___asset___sha1hash = 'image___asset___sha1hash',
  image___asset___extension = 'image___asset___extension',
  image___asset___mimeType = 'image___asset___mimeType',
  image___asset___size = 'image___asset___size',
  image___asset___assetId = 'image___asset___assetId',
  image___asset___path = 'image___asset___path',
  image___asset___url = 'image___asset___url',
  image___asset___metadata____key = 'image___asset___metadata____key',
  image___asset___metadata____type = 'image___asset___metadata____type',
  image___asset___metadata___lqip = 'image___asset___metadata___lqip',
  image___asset___metadata___hasAlpha = 'image___asset___metadata___hasAlpha',
  image___asset___metadata___isOpaque = 'image___asset___metadata___isOpaque',
  image___asset___source____key = 'image___asset___source____key',
  image___asset___source____type = 'image___asset___source____type',
  image___asset___source___name = 'image___asset___source___name',
  image___asset___source___sanityId = 'image___asset___source___sanityId',
  image___asset___source___url = 'image___asset___source___url',
  image___asset___fixed___base64 = 'image___asset___fixed___base64',
  image___asset___fixed___aspectRatio = 'image___asset___fixed___aspectRatio',
  image___asset___fixed___width = 'image___asset___fixed___width',
  image___asset___fixed___height = 'image___asset___fixed___height',
  image___asset___fixed___src = 'image___asset___fixed___src',
  image___asset___fixed___srcSet = 'image___asset___fixed___srcSet',
  image___asset___fixed___srcWebp = 'image___asset___fixed___srcWebp',
  image___asset___fixed___srcSetWebp = 'image___asset___fixed___srcSetWebp',
  image___asset___fluid___base64 = 'image___asset___fluid___base64',
  image___asset___fluid___aspectRatio = 'image___asset___fluid___aspectRatio',
  image___asset___fluid___src = 'image___asset___fluid___src',
  image___asset___fluid___srcSet = 'image___asset___fluid___srcSet',
  image___asset___fluid___srcWebp = 'image___asset___fluid___srcWebp',
  image___asset___fluid___srcSetWebp = 'image___asset___fluid___srcSetWebp',
  image___asset___fluid___sizes = 'image___asset___fluid___sizes',
  image___asset____rawMetadata = 'image___asset____rawMetadata',
  image___asset____rawSource = 'image___asset____rawSource',
  image___asset___id = 'image___asset___id',
  image___asset___parent___id = 'image___asset___parent___id',
  image___asset___parent___children = 'image___asset___parent___children',
  image___asset___children = 'image___asset___children',
  image___asset___children___id = 'image___asset___children___id',
  image___asset___children___children = 'image___asset___children___children',
  image___asset___internal___content = 'image___asset___internal___content',
  image___asset___internal___contentDigest = 'image___asset___internal___contentDigest',
  image___asset___internal___description = 'image___asset___internal___description',
  image___asset___internal___fieldOwners = 'image___asset___internal___fieldOwners',
  image___asset___internal___ignoreType = 'image___asset___internal___ignoreType',
  image___asset___internal___mediaType = 'image___asset___internal___mediaType',
  image___asset___internal___owner = 'image___asset___internal___owner',
  image___asset___internal___type = 'image___asset___internal___type',
  image___asset___childImageSharp___id = 'image___asset___childImageSharp___id',
  image___asset___childImageSharp___children = 'image___asset___childImageSharp___children',
  image___hotspot____key = 'image___hotspot____key',
  image___hotspot____type = 'image___hotspot____type',
  image___hotspot___x = 'image___hotspot___x',
  image___hotspot___y = 'image___hotspot___y',
  image___hotspot___height = 'image___hotspot___height',
  image___hotspot___width = 'image___hotspot___width',
  image___crop____key = 'image___crop____key',
  image___crop____type = 'image___crop____type',
  image___crop___top = 'image___crop___top',
  image___crop___bottom = 'image___crop___bottom',
  image___crop___left = 'image___crop___left',
  image___crop___right = 'image___crop___right',
  hero____key = 'hero____key',
  hero____type = 'hero____type',
  hero___title = 'hero___title',
  hero___intro = 'hero___intro',
  hero___image____key = 'hero___image____key',
  hero___image____type = 'hero___image____type',
  hero___image___asset____id = 'hero___image___asset____id',
  hero___image___asset____type = 'hero___image___asset____type',
  hero___image___asset____createdAt = 'hero___image___asset____createdAt',
  hero___image___asset____updatedAt = 'hero___image___asset____updatedAt',
  hero___image___asset____rev = 'hero___image___asset____rev',
  hero___image___asset____key = 'hero___image___asset____key',
  hero___image___asset___originalFilename = 'hero___image___asset___originalFilename',
  hero___image___asset___label = 'hero___image___asset___label',
  hero___image___asset___title = 'hero___image___asset___title',
  hero___image___asset___description = 'hero___image___asset___description',
  hero___image___asset___sha1hash = 'hero___image___asset___sha1hash',
  hero___image___asset___extension = 'hero___image___asset___extension',
  hero___image___asset___mimeType = 'hero___image___asset___mimeType',
  hero___image___asset___size = 'hero___image___asset___size',
  hero___image___asset___assetId = 'hero___image___asset___assetId',
  hero___image___asset___path = 'hero___image___asset___path',
  hero___image___asset___url = 'hero___image___asset___url',
  hero___image___asset____rawMetadata = 'hero___image___asset____rawMetadata',
  hero___image___asset____rawSource = 'hero___image___asset____rawSource',
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
  hero___button____key = 'hero___button____key',
  hero___button____type = 'hero___button____type',
  hero___button___text = 'hero___button___text',
  hero___button___link____id = 'hero___button___link____id',
  hero___button___link____type = 'hero___button___link____type',
  hero___button___link____createdAt = 'hero___button___link____createdAt',
  hero___button___link____updatedAt = 'hero___button___link____updatedAt',
  hero___button___link____rev = 'hero___button___link____rev',
  hero___button___link____key = 'hero___button___link____key',
  hero___button___link___title = 'hero___button___link___title',
  hero___button___link___description = 'hero___button___link___description',
  hero___button___link____rawSlug = 'hero___button___link____rawSlug',
  hero___button___link____rawImage = 'hero___button___link____rawImage',
  hero___button___link____rawHero = 'hero___button___link____rawHero',
  hero___button___link____rawModules = 'hero___button___link____rawModules',
  hero___button___link___id = 'hero___button___link___id',
  hero___button___link___children = 'hero___button___link___children',
  shopifyId = 'shopifyId',
  shopifyHandle = 'shopifyHandle',
  shopifyDefaultVariant____key = 'shopifyDefaultVariant____key',
  shopifyDefaultVariant____type = 'shopifyDefaultVariant____type',
  shopifyDefaultVariant___title = 'shopifyDefaultVariant___title',
  shopifyDefaultVariant___price = 'shopifyDefaultVariant___price',
  _rawSlug = '_rawSlug',
  _rawImage = '_rawImage',
  _rawHero = '_rawHero',
  _rawModules = '_rawModules',
  _rawShopifyDefaultVariant = '_rawShopifyDefaultVariant',
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
  internal___type = 'internal___type'
}

export type SanityProductFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<SanityMainImageFilterInput>,
  hero?: Maybe<SanityHeroFilterInput>,
  shopifyId?: Maybe<FloatQueryOperatorInput>,
  shopifyHandle?: Maybe<StringQueryOperatorInput>,
  shopifyDefaultVariant?: Maybe<SanityShopifyVariantFilterInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawImage?: Maybe<JsonQueryOperatorInput>,
  _rawHero?: Maybe<JsonQueryOperatorInput>,
  _rawModules?: Maybe<JsonQueryOperatorInput>,
  _rawShopifyDefaultVariant?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityProductGroup = {
   __typename?: 'SanityProductGroup',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  products?: Maybe<Array<Maybe<SanityProductReference>>>,
};

export type SanityProductGroupConnection = {
   __typename?: 'SanityProductGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityProductEdge>,
  nodes: Array<SanityProduct>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityProductReference = {
   __typename?: 'SanityProductReference',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  product?: Maybe<SanityProduct>,
};

export type SanityProductSortInput = {
  fields?: Maybe<Array<Maybe<SanityProductFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'],
};

export type SanityRichText = {
   __typename?: 'SanityRichText',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  blocks?: Maybe<Array<Maybe<SanityBlock>>>,
};

export type SanityRichTextFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  blocks?: Maybe<SanityBlockFilterListInput>,
};

export type SanitySeo = {
   __typename?: 'SanitySeo',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<SanityMainImage>,
};

export type SanitySeoFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<SanityMainImageFilterInput>,
};

export type SanityShopifyVariant = {
   __typename?: 'SanityShopifyVariant',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['String']>,
};

export type SanityShopifyVariantFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  price?: Maybe<StringQueryOperatorInput>,
};

export type SanitySiteSettings = SanityDocument & Node & {
   __typename?: 'SanitySiteSettings',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  primaryNav?: Maybe<SanityNavGroup>,
  secondaryNav?: Maybe<SanityNavGroup>,
  social?: Maybe<SanitySocial>,
  seo?: Maybe<SanitySeo>,
  promo?: Maybe<SanityRichText>,
  _rawPrimaryNav?: Maybe<Scalars['JSON']>,
  _rawSecondaryNav?: Maybe<Scalars['JSON']>,
  _rawSocial?: Maybe<Scalars['JSON']>,
  _rawSeo?: Maybe<Scalars['JSON']>,
  _rawPromo?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanitySiteSettings_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanitySiteSettings_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanitySiteSettings_RawPrimaryNavArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanitySiteSettings_RawSecondaryNavArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanitySiteSettings_RawSocialArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanitySiteSettings_RawSeoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanitySiteSettings_RawPromoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanitySiteSettingsConnection = {
   __typename?: 'SanitySiteSettingsConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanitySiteSettingsEdge>,
  nodes: Array<SanitySiteSettings>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanitySiteSettingsGroupConnection>,
};


export type SanitySiteSettingsConnectionDistinctArgs = {
  field: SanitySiteSettingsFieldsEnum
};


export type SanitySiteSettingsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanitySiteSettingsFieldsEnum
};

export type SanitySiteSettingsEdge = {
   __typename?: 'SanitySiteSettingsEdge',
  next?: Maybe<SanitySiteSettings>,
  node: SanitySiteSettings,
  previous?: Maybe<SanitySiteSettings>,
};

export enum SanitySiteSettingsFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  primaryNav____key = 'primaryNav____key',
  primaryNav____type = 'primaryNav____type',
  primaryNav___pages = 'primaryNav___pages',
  primaryNav___pages____key = 'primaryNav___pages____key',
  primaryNav___pages____type = 'primaryNav___pages____type',
  primaryNav___pages___page____id = 'primaryNav___pages___page____id',
  primaryNav___pages___page____type = 'primaryNav___pages___page____type',
  primaryNav___pages___page____createdAt = 'primaryNav___pages___page____createdAt',
  primaryNav___pages___page____updatedAt = 'primaryNav___pages___page____updatedAt',
  primaryNav___pages___page____rev = 'primaryNav___pages___page____rev',
  primaryNav___pages___page____key = 'primaryNav___pages___page____key',
  primaryNav___pages___page___title = 'primaryNav___pages___page___title',
  primaryNav___pages___page___description = 'primaryNav___pages___page___description',
  primaryNav___pages___page____rawSlug = 'primaryNav___pages___page____rawSlug',
  primaryNav___pages___page____rawImage = 'primaryNav___pages___page____rawImage',
  primaryNav___pages___page____rawHero = 'primaryNav___pages___page____rawHero',
  primaryNav___pages___page____rawModules = 'primaryNav___pages___page____rawModules',
  primaryNav___pages___page___id = 'primaryNav___pages___page___id',
  primaryNav___pages___page___children = 'primaryNav___pages___page___children',
  secondaryNav____key = 'secondaryNav____key',
  secondaryNav____type = 'secondaryNav____type',
  secondaryNav___pages = 'secondaryNav___pages',
  secondaryNav___pages____key = 'secondaryNav___pages____key',
  secondaryNav___pages____type = 'secondaryNav___pages____type',
  secondaryNav___pages___page____id = 'secondaryNav___pages___page____id',
  secondaryNav___pages___page____type = 'secondaryNav___pages___page____type',
  secondaryNav___pages___page____createdAt = 'secondaryNav___pages___page____createdAt',
  secondaryNav___pages___page____updatedAt = 'secondaryNav___pages___page____updatedAt',
  secondaryNav___pages___page____rev = 'secondaryNav___pages___page____rev',
  secondaryNav___pages___page____key = 'secondaryNav___pages___page____key',
  secondaryNav___pages___page___title = 'secondaryNav___pages___page___title',
  secondaryNav___pages___page___description = 'secondaryNav___pages___page___description',
  secondaryNav___pages___page____rawSlug = 'secondaryNav___pages___page____rawSlug',
  secondaryNav___pages___page____rawImage = 'secondaryNav___pages___page____rawImage',
  secondaryNav___pages___page____rawHero = 'secondaryNav___pages___page____rawHero',
  secondaryNav___pages___page____rawModules = 'secondaryNav___pages___page____rawModules',
  secondaryNav___pages___page___id = 'secondaryNav___pages___page___id',
  secondaryNav___pages___page___children = 'secondaryNav___pages___page___children',
  social____key = 'social____key',
  social____type = 'social____type',
  social___vimeo = 'social___vimeo',
  social___instagram = 'social___instagram',
  social___facebook = 'social___facebook',
  seo____key = 'seo____key',
  seo____type = 'seo____type',
  seo___title = 'seo___title',
  seo___description = 'seo___description',
  seo___image____key = 'seo___image____key',
  seo___image____type = 'seo___image____type',
  seo___image___asset____id = 'seo___image___asset____id',
  seo___image___asset____type = 'seo___image___asset____type',
  seo___image___asset____createdAt = 'seo___image___asset____createdAt',
  seo___image___asset____updatedAt = 'seo___image___asset____updatedAt',
  seo___image___asset____rev = 'seo___image___asset____rev',
  seo___image___asset____key = 'seo___image___asset____key',
  seo___image___asset___originalFilename = 'seo___image___asset___originalFilename',
  seo___image___asset___label = 'seo___image___asset___label',
  seo___image___asset___title = 'seo___image___asset___title',
  seo___image___asset___description = 'seo___image___asset___description',
  seo___image___asset___sha1hash = 'seo___image___asset___sha1hash',
  seo___image___asset___extension = 'seo___image___asset___extension',
  seo___image___asset___mimeType = 'seo___image___asset___mimeType',
  seo___image___asset___size = 'seo___image___asset___size',
  seo___image___asset___assetId = 'seo___image___asset___assetId',
  seo___image___asset___path = 'seo___image___asset___path',
  seo___image___asset___url = 'seo___image___asset___url',
  seo___image___asset____rawMetadata = 'seo___image___asset____rawMetadata',
  seo___image___asset____rawSource = 'seo___image___asset____rawSource',
  seo___image___asset___id = 'seo___image___asset___id',
  seo___image___asset___children = 'seo___image___asset___children',
  seo___image___hotspot____key = 'seo___image___hotspot____key',
  seo___image___hotspot____type = 'seo___image___hotspot____type',
  seo___image___hotspot___x = 'seo___image___hotspot___x',
  seo___image___hotspot___y = 'seo___image___hotspot___y',
  seo___image___hotspot___height = 'seo___image___hotspot___height',
  seo___image___hotspot___width = 'seo___image___hotspot___width',
  seo___image___crop____key = 'seo___image___crop____key',
  seo___image___crop____type = 'seo___image___crop____type',
  seo___image___crop___top = 'seo___image___crop___top',
  seo___image___crop___bottom = 'seo___image___crop___bottom',
  seo___image___crop___left = 'seo___image___crop___left',
  seo___image___crop___right = 'seo___image___crop___right',
  promo____key = 'promo____key',
  promo____type = 'promo____type',
  promo___blocks = 'promo___blocks',
  promo___blocks____key = 'promo___blocks____key',
  promo___blocks____type = 'promo___blocks____type',
  promo___blocks___sanityChildren = 'promo___blocks___sanityChildren',
  promo___blocks___sanityChildren____key = 'promo___blocks___sanityChildren____key',
  promo___blocks___sanityChildren____type = 'promo___blocks___sanityChildren____type',
  promo___blocks___sanityChildren___marks = 'promo___blocks___sanityChildren___marks',
  promo___blocks___sanityChildren___text = 'promo___blocks___sanityChildren___text',
  promo___blocks___style = 'promo___blocks___style',
  promo___blocks___list = 'promo___blocks___list',
  _rawPrimaryNav = '_rawPrimaryNav',
  _rawSecondaryNav = '_rawSecondaryNav',
  _rawSocial = '_rawSocial',
  _rawSeo = '_rawSeo',
  _rawPromo = '_rawPromo',
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
  internal___type = 'internal___type'
}

export type SanitySiteSettingsFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  primaryNav?: Maybe<SanityNavGroupFilterInput>,
  secondaryNav?: Maybe<SanityNavGroupFilterInput>,
  social?: Maybe<SanitySocialFilterInput>,
  seo?: Maybe<SanitySeoFilterInput>,
  promo?: Maybe<SanityRichTextFilterInput>,
  _rawPrimaryNav?: Maybe<JsonQueryOperatorInput>,
  _rawSecondaryNav?: Maybe<JsonQueryOperatorInput>,
  _rawSocial?: Maybe<JsonQueryOperatorInput>,
  _rawSeo?: Maybe<JsonQueryOperatorInput>,
  _rawPromo?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanitySiteSettingsGroupConnection = {
   __typename?: 'SanitySiteSettingsGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanitySiteSettingsEdge>,
  nodes: Array<SanitySiteSettings>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanitySiteSettingsSortInput = {
  fields?: Maybe<Array<Maybe<SanitySiteSettingsFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanitySlug = {
   __typename?: 'SanitySlug',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['String']>,
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  current?: Maybe<StringQueryOperatorInput>,
};

export type SanitySocial = {
   __typename?: 'SanitySocial',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  vimeo?: Maybe<Scalars['String']>,
  instagram?: Maybe<Scalars['String']>,
  facebook?: Maybe<Scalars['String']>,
};

export type SanitySocialFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  vimeo?: Maybe<StringQueryOperatorInput>,
  instagram?: Maybe<StringQueryOperatorInput>,
  facebook?: Maybe<StringQueryOperatorInput>,
};

export type SanitySpan = {
   __typename?: 'SanitySpan',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  marks?: Maybe<Array<Maybe<Scalars['String']>>>,
  text?: Maybe<Scalars['String']>,
};

export type SanitySpanFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  marks?: Maybe<StringQueryOperatorInput>,
  text?: Maybe<StringQueryOperatorInput>,
};

export type SanitySpanFilterListInput = {
  elemMatch?: Maybe<SanitySpanFilterInput>,
};

export type SanityVideoData = {
   __typename?: 'SanityVideoData',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  thumbnail?: Maybe<Scalars['String']>,
};

export type SanityVimeo = {
   __typename?: 'SanityVimeo',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  data?: Maybe<SanityVideoData>,
  image?: Maybe<SanityMainImage>,
};

export type ShopifyCollection = Node & {
   __typename?: 'ShopifyCollection',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  description?: Maybe<Scalars['String']>,
  descriptionHtml?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Date']>,
  shopifyId?: Maybe<Scalars['String']>,
  products?: Maybe<Array<Maybe<ShopifyProduct>>>,
};


export type ShopifyCollectionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ShopifyCollectionConnection = {
   __typename?: 'ShopifyCollectionConnection',
  totalCount: Scalars['Int'],
  edges: Array<ShopifyCollectionEdge>,
  nodes: Array<ShopifyCollection>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ShopifyCollectionGroupConnection>,
};


export type ShopifyCollectionConnectionDistinctArgs = {
  field: ShopifyCollectionFieldsEnum
};


export type ShopifyCollectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ShopifyCollectionFieldsEnum
};

export type ShopifyCollectionEdge = {
   __typename?: 'ShopifyCollectionEdge',
  next?: Maybe<ShopifyCollection>,
  node: ShopifyCollection,
  previous?: Maybe<ShopifyCollection>,
};

export enum ShopifyCollectionFieldsEnum {
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
  description = 'description',
  descriptionHtml = 'descriptionHtml',
  handle = 'handle',
  title = 'title',
  updatedAt = 'updatedAt',
  shopifyId = 'shopifyId',
  products = 'products',
  products___id = 'products___id',
  products___parent___id = 'products___parent___id',
  products___parent___parent___id = 'products___parent___parent___id',
  products___parent___parent___children = 'products___parent___parent___children',
  products___parent___children = 'products___parent___children',
  products___parent___children___id = 'products___parent___children___id',
  products___parent___children___children = 'products___parent___children___children',
  products___parent___internal___content = 'products___parent___internal___content',
  products___parent___internal___contentDigest = 'products___parent___internal___contentDigest',
  products___parent___internal___description = 'products___parent___internal___description',
  products___parent___internal___fieldOwners = 'products___parent___internal___fieldOwners',
  products___parent___internal___ignoreType = 'products___parent___internal___ignoreType',
  products___parent___internal___mediaType = 'products___parent___internal___mediaType',
  products___parent___internal___owner = 'products___parent___internal___owner',
  products___parent___internal___type = 'products___parent___internal___type',
  products___children = 'products___children',
  products___children___id = 'products___children___id',
  products___children___parent___id = 'products___children___parent___id',
  products___children___parent___children = 'products___children___parent___children',
  products___children___children = 'products___children___children',
  products___children___children___id = 'products___children___children___id',
  products___children___children___children = 'products___children___children___children',
  products___children___internal___content = 'products___children___internal___content',
  products___children___internal___contentDigest = 'products___children___internal___contentDigest',
  products___children___internal___description = 'products___children___internal___description',
  products___children___internal___fieldOwners = 'products___children___internal___fieldOwners',
  products___children___internal___ignoreType = 'products___children___internal___ignoreType',
  products___children___internal___mediaType = 'products___children___internal___mediaType',
  products___children___internal___owner = 'products___children___internal___owner',
  products___children___internal___type = 'products___children___internal___type',
  products___internal___content = 'products___internal___content',
  products___internal___contentDigest = 'products___internal___contentDigest',
  products___internal___description = 'products___internal___description',
  products___internal___fieldOwners = 'products___internal___fieldOwners',
  products___internal___ignoreType = 'products___internal___ignoreType',
  products___internal___mediaType = 'products___internal___mediaType',
  products___internal___owner = 'products___internal___owner',
  products___internal___type = 'products___internal___type',
  products___availableForSale = 'products___availableForSale',
  products___createdAt = 'products___createdAt',
  products___description = 'products___description',
  products___descriptionHtml = 'products___descriptionHtml',
  products___handle = 'products___handle',
  products___images = 'products___images',
  products___images___id = 'products___images___id',
  products___images___originalSrc = 'products___images___originalSrc',
  products___images___localFile___birthtime = 'products___images___localFile___birthtime',
  products___images___localFile___birthtimeMs = 'products___images___localFile___birthtimeMs',
  products___images___localFile___sourceInstanceName = 'products___images___localFile___sourceInstanceName',
  products___images___localFile___absolutePath = 'products___images___localFile___absolutePath',
  products___images___localFile___relativePath = 'products___images___localFile___relativePath',
  products___images___localFile___extension = 'products___images___localFile___extension',
  products___images___localFile___size = 'products___images___localFile___size',
  products___images___localFile___prettySize = 'products___images___localFile___prettySize',
  products___images___localFile___modifiedTime = 'products___images___localFile___modifiedTime',
  products___images___localFile___accessTime = 'products___images___localFile___accessTime',
  products___images___localFile___changeTime = 'products___images___localFile___changeTime',
  products___images___localFile___birthTime = 'products___images___localFile___birthTime',
  products___images___localFile___root = 'products___images___localFile___root',
  products___images___localFile___dir = 'products___images___localFile___dir',
  products___images___localFile___base = 'products___images___localFile___base',
  products___images___localFile___ext = 'products___images___localFile___ext',
  products___images___localFile___name = 'products___images___localFile___name',
  products___images___localFile___relativeDirectory = 'products___images___localFile___relativeDirectory',
  products___images___localFile___dev = 'products___images___localFile___dev',
  products___images___localFile___mode = 'products___images___localFile___mode',
  products___images___localFile___nlink = 'products___images___localFile___nlink',
  products___images___localFile___uid = 'products___images___localFile___uid',
  products___images___localFile___gid = 'products___images___localFile___gid',
  products___images___localFile___rdev = 'products___images___localFile___rdev',
  products___images___localFile___blksize = 'products___images___localFile___blksize',
  products___images___localFile___ino = 'products___images___localFile___ino',
  products___images___localFile___blocks = 'products___images___localFile___blocks',
  products___images___localFile___atimeMs = 'products___images___localFile___atimeMs',
  products___images___localFile___mtimeMs = 'products___images___localFile___mtimeMs',
  products___images___localFile___ctimeMs = 'products___images___localFile___ctimeMs',
  products___images___localFile___atime = 'products___images___localFile___atime',
  products___images___localFile___mtime = 'products___images___localFile___mtime',
  products___images___localFile___ctime = 'products___images___localFile___ctime',
  products___images___localFile___url = 'products___images___localFile___url',
  products___images___localFile___publicURL = 'products___images___localFile___publicURL',
  products___images___localFile___id = 'products___images___localFile___id',
  products___images___localFile___children = 'products___images___localFile___children',
  products___priceRange___minVariantPrice___amount = 'products___priceRange___minVariantPrice___amount',
  products___priceRange___minVariantPrice___currencyCode = 'products___priceRange___minVariantPrice___currencyCode',
  products___priceRange___maxVariantPrice___amount = 'products___priceRange___maxVariantPrice___amount',
  products___priceRange___maxVariantPrice___currencyCode = 'products___priceRange___maxVariantPrice___currencyCode',
  products___productType = 'products___productType',
  products___publishedAt = 'products___publishedAt',
  products___title = 'products___title',
  products___updatedAt = 'products___updatedAt',
  products___vendor = 'products___vendor',
  products___shopifyId = 'products___shopifyId',
  products___variants = 'products___variants',
  products___variants___id = 'products___variants___id',
  products___variants___parent___id = 'products___variants___parent___id',
  products___variants___parent___children = 'products___variants___parent___children',
  products___variants___children = 'products___variants___children',
  products___variants___children___id = 'products___variants___children___id',
  products___variants___children___children = 'products___variants___children___children',
  products___variants___internal___content = 'products___variants___internal___content',
  products___variants___internal___contentDigest = 'products___variants___internal___contentDigest',
  products___variants___internal___description = 'products___variants___internal___description',
  products___variants___internal___fieldOwners = 'products___variants___internal___fieldOwners',
  products___variants___internal___ignoreType = 'products___variants___internal___ignoreType',
  products___variants___internal___mediaType = 'products___variants___internal___mediaType',
  products___variants___internal___owner = 'products___variants___internal___owner',
  products___variants___internal___type = 'products___variants___internal___type',
  products___variants___availableForSale = 'products___variants___availableForSale',
  products___variants___image___id = 'products___variants___image___id',
  products___variants___image___originalSrc = 'products___variants___image___originalSrc',
  products___variants___price = 'products___variants___price',
  products___variants___selectedOptions = 'products___variants___selectedOptions',
  products___variants___selectedOptions___name = 'products___variants___selectedOptions___name',
  products___variants___selectedOptions___value = 'products___variants___selectedOptions___value',
  products___variants___sku = 'products___variants___sku',
  products___variants___title = 'products___variants___title',
  products___variants___weight = 'products___variants___weight',
  products___variants___weightUnit = 'products___variants___weightUnit',
  products___variants___presentmentPrices___edges = 'products___variants___presentmentPrices___edges',
  products___variants___shopifyId = 'products___variants___shopifyId',
  products___options = 'products___options',
  products___options___id = 'products___options___id',
  products___options___parent___id = 'products___options___parent___id',
  products___options___parent___children = 'products___options___parent___children',
  products___options___children = 'products___options___children',
  products___options___children___id = 'products___options___children___id',
  products___options___children___children = 'products___options___children___children',
  products___options___internal___content = 'products___options___internal___content',
  products___options___internal___contentDigest = 'products___options___internal___contentDigest',
  products___options___internal___description = 'products___options___internal___description',
  products___options___internal___fieldOwners = 'products___options___internal___fieldOwners',
  products___options___internal___ignoreType = 'products___options___internal___ignoreType',
  products___options___internal___mediaType = 'products___options___internal___mediaType',
  products___options___internal___owner = 'products___options___internal___owner',
  products___options___internal___type = 'products___options___internal___type',
  products___options___name = 'products___options___name',
  products___options___values = 'products___options___values',
  products___options___shopifyId = 'products___options___shopifyId'
}

export type ShopifyCollectionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  descriptionHtml?: Maybe<StringQueryOperatorInput>,
  handle?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  shopifyId?: Maybe<StringQueryOperatorInput>,
  products?: Maybe<ShopifyProductFilterListInput>,
};

export type ShopifyCollectionGroupConnection = {
   __typename?: 'ShopifyCollectionGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ShopifyCollectionEdge>,
  nodes: Array<ShopifyCollection>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ShopifyCollectionSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyCollectionFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ShopifyProduct = Node & {
   __typename?: 'ShopifyProduct',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  availableForSale?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  descriptionHtml?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<ShopifyProductImages>>>,
  priceRange?: Maybe<ShopifyProductPriceRange>,
  productType?: Maybe<Scalars['String']>,
  publishedAt?: Maybe<Scalars['Date']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Date']>,
  vendor?: Maybe<Scalars['String']>,
  shopifyId?: Maybe<Scalars['String']>,
  variants?: Maybe<Array<Maybe<ShopifyProductVariant>>>,
  options?: Maybe<Array<Maybe<ShopifyProductOption>>>,
};


export type ShopifyProductCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ShopifyProductPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ShopifyProductUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ShopifyProductConnection = {
   __typename?: 'ShopifyProductConnection',
  totalCount: Scalars['Int'],
  edges: Array<ShopifyProductEdge>,
  nodes: Array<ShopifyProduct>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ShopifyProductGroupConnection>,
};


export type ShopifyProductConnectionDistinctArgs = {
  field: ShopifyProductFieldsEnum
};


export type ShopifyProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ShopifyProductFieldsEnum
};

export type ShopifyProductEdge = {
   __typename?: 'ShopifyProductEdge',
  next?: Maybe<ShopifyProduct>,
  node: ShopifyProduct,
  previous?: Maybe<ShopifyProduct>,
};

export enum ShopifyProductFieldsEnum {
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
  availableForSale = 'availableForSale',
  createdAt = 'createdAt',
  description = 'description',
  descriptionHtml = 'descriptionHtml',
  handle = 'handle',
  images = 'images',
  images___id = 'images___id',
  images___originalSrc = 'images___originalSrc',
  images___localFile___birthtime = 'images___localFile___birthtime',
  images___localFile___birthtimeMs = 'images___localFile___birthtimeMs',
  images___localFile___sourceInstanceName = 'images___localFile___sourceInstanceName',
  images___localFile___absolutePath = 'images___localFile___absolutePath',
  images___localFile___relativePath = 'images___localFile___relativePath',
  images___localFile___extension = 'images___localFile___extension',
  images___localFile___size = 'images___localFile___size',
  images___localFile___prettySize = 'images___localFile___prettySize',
  images___localFile___modifiedTime = 'images___localFile___modifiedTime',
  images___localFile___accessTime = 'images___localFile___accessTime',
  images___localFile___changeTime = 'images___localFile___changeTime',
  images___localFile___birthTime = 'images___localFile___birthTime',
  images___localFile___root = 'images___localFile___root',
  images___localFile___dir = 'images___localFile___dir',
  images___localFile___base = 'images___localFile___base',
  images___localFile___ext = 'images___localFile___ext',
  images___localFile___name = 'images___localFile___name',
  images___localFile___relativeDirectory = 'images___localFile___relativeDirectory',
  images___localFile___dev = 'images___localFile___dev',
  images___localFile___mode = 'images___localFile___mode',
  images___localFile___nlink = 'images___localFile___nlink',
  images___localFile___uid = 'images___localFile___uid',
  images___localFile___gid = 'images___localFile___gid',
  images___localFile___rdev = 'images___localFile___rdev',
  images___localFile___blksize = 'images___localFile___blksize',
  images___localFile___ino = 'images___localFile___ino',
  images___localFile___blocks = 'images___localFile___blocks',
  images___localFile___atimeMs = 'images___localFile___atimeMs',
  images___localFile___mtimeMs = 'images___localFile___mtimeMs',
  images___localFile___ctimeMs = 'images___localFile___ctimeMs',
  images___localFile___atime = 'images___localFile___atime',
  images___localFile___mtime = 'images___localFile___mtime',
  images___localFile___ctime = 'images___localFile___ctime',
  images___localFile___url = 'images___localFile___url',
  images___localFile___publicURL = 'images___localFile___publicURL',
  images___localFile___childImageSharp___id = 'images___localFile___childImageSharp___id',
  images___localFile___childImageSharp___children = 'images___localFile___childImageSharp___children',
  images___localFile___id = 'images___localFile___id',
  images___localFile___parent___id = 'images___localFile___parent___id',
  images___localFile___parent___children = 'images___localFile___parent___children',
  images___localFile___children = 'images___localFile___children',
  images___localFile___children___id = 'images___localFile___children___id',
  images___localFile___children___children = 'images___localFile___children___children',
  images___localFile___internal___content = 'images___localFile___internal___content',
  images___localFile___internal___contentDigest = 'images___localFile___internal___contentDigest',
  images___localFile___internal___description = 'images___localFile___internal___description',
  images___localFile___internal___fieldOwners = 'images___localFile___internal___fieldOwners',
  images___localFile___internal___ignoreType = 'images___localFile___internal___ignoreType',
  images___localFile___internal___mediaType = 'images___localFile___internal___mediaType',
  images___localFile___internal___owner = 'images___localFile___internal___owner',
  images___localFile___internal___type = 'images___localFile___internal___type',
  priceRange___minVariantPrice___amount = 'priceRange___minVariantPrice___amount',
  priceRange___minVariantPrice___currencyCode = 'priceRange___minVariantPrice___currencyCode',
  priceRange___maxVariantPrice___amount = 'priceRange___maxVariantPrice___amount',
  priceRange___maxVariantPrice___currencyCode = 'priceRange___maxVariantPrice___currencyCode',
  productType = 'productType',
  publishedAt = 'publishedAt',
  title = 'title',
  updatedAt = 'updatedAt',
  vendor = 'vendor',
  shopifyId = 'shopifyId',
  variants = 'variants',
  variants___id = 'variants___id',
  variants___parent___id = 'variants___parent___id',
  variants___parent___parent___id = 'variants___parent___parent___id',
  variants___parent___parent___children = 'variants___parent___parent___children',
  variants___parent___children = 'variants___parent___children',
  variants___parent___children___id = 'variants___parent___children___id',
  variants___parent___children___children = 'variants___parent___children___children',
  variants___parent___internal___content = 'variants___parent___internal___content',
  variants___parent___internal___contentDigest = 'variants___parent___internal___contentDigest',
  variants___parent___internal___description = 'variants___parent___internal___description',
  variants___parent___internal___fieldOwners = 'variants___parent___internal___fieldOwners',
  variants___parent___internal___ignoreType = 'variants___parent___internal___ignoreType',
  variants___parent___internal___mediaType = 'variants___parent___internal___mediaType',
  variants___parent___internal___owner = 'variants___parent___internal___owner',
  variants___parent___internal___type = 'variants___parent___internal___type',
  variants___children = 'variants___children',
  variants___children___id = 'variants___children___id',
  variants___children___parent___id = 'variants___children___parent___id',
  variants___children___parent___children = 'variants___children___parent___children',
  variants___children___children = 'variants___children___children',
  variants___children___children___id = 'variants___children___children___id',
  variants___children___children___children = 'variants___children___children___children',
  variants___children___internal___content = 'variants___children___internal___content',
  variants___children___internal___contentDigest = 'variants___children___internal___contentDigest',
  variants___children___internal___description = 'variants___children___internal___description',
  variants___children___internal___fieldOwners = 'variants___children___internal___fieldOwners',
  variants___children___internal___ignoreType = 'variants___children___internal___ignoreType',
  variants___children___internal___mediaType = 'variants___children___internal___mediaType',
  variants___children___internal___owner = 'variants___children___internal___owner',
  variants___children___internal___type = 'variants___children___internal___type',
  variants___internal___content = 'variants___internal___content',
  variants___internal___contentDigest = 'variants___internal___contentDigest',
  variants___internal___description = 'variants___internal___description',
  variants___internal___fieldOwners = 'variants___internal___fieldOwners',
  variants___internal___ignoreType = 'variants___internal___ignoreType',
  variants___internal___mediaType = 'variants___internal___mediaType',
  variants___internal___owner = 'variants___internal___owner',
  variants___internal___type = 'variants___internal___type',
  variants___availableForSale = 'variants___availableForSale',
  variants___image___id = 'variants___image___id',
  variants___image___originalSrc = 'variants___image___originalSrc',
  variants___image___localFile___birthtime = 'variants___image___localFile___birthtime',
  variants___image___localFile___birthtimeMs = 'variants___image___localFile___birthtimeMs',
  variants___image___localFile___sourceInstanceName = 'variants___image___localFile___sourceInstanceName',
  variants___image___localFile___absolutePath = 'variants___image___localFile___absolutePath',
  variants___image___localFile___relativePath = 'variants___image___localFile___relativePath',
  variants___image___localFile___extension = 'variants___image___localFile___extension',
  variants___image___localFile___size = 'variants___image___localFile___size',
  variants___image___localFile___prettySize = 'variants___image___localFile___prettySize',
  variants___image___localFile___modifiedTime = 'variants___image___localFile___modifiedTime',
  variants___image___localFile___accessTime = 'variants___image___localFile___accessTime',
  variants___image___localFile___changeTime = 'variants___image___localFile___changeTime',
  variants___image___localFile___birthTime = 'variants___image___localFile___birthTime',
  variants___image___localFile___root = 'variants___image___localFile___root',
  variants___image___localFile___dir = 'variants___image___localFile___dir',
  variants___image___localFile___base = 'variants___image___localFile___base',
  variants___image___localFile___ext = 'variants___image___localFile___ext',
  variants___image___localFile___name = 'variants___image___localFile___name',
  variants___image___localFile___relativeDirectory = 'variants___image___localFile___relativeDirectory',
  variants___image___localFile___dev = 'variants___image___localFile___dev',
  variants___image___localFile___mode = 'variants___image___localFile___mode',
  variants___image___localFile___nlink = 'variants___image___localFile___nlink',
  variants___image___localFile___uid = 'variants___image___localFile___uid',
  variants___image___localFile___gid = 'variants___image___localFile___gid',
  variants___image___localFile___rdev = 'variants___image___localFile___rdev',
  variants___image___localFile___blksize = 'variants___image___localFile___blksize',
  variants___image___localFile___ino = 'variants___image___localFile___ino',
  variants___image___localFile___blocks = 'variants___image___localFile___blocks',
  variants___image___localFile___atimeMs = 'variants___image___localFile___atimeMs',
  variants___image___localFile___mtimeMs = 'variants___image___localFile___mtimeMs',
  variants___image___localFile___ctimeMs = 'variants___image___localFile___ctimeMs',
  variants___image___localFile___atime = 'variants___image___localFile___atime',
  variants___image___localFile___mtime = 'variants___image___localFile___mtime',
  variants___image___localFile___ctime = 'variants___image___localFile___ctime',
  variants___image___localFile___url = 'variants___image___localFile___url',
  variants___image___localFile___publicURL = 'variants___image___localFile___publicURL',
  variants___image___localFile___id = 'variants___image___localFile___id',
  variants___image___localFile___children = 'variants___image___localFile___children',
  variants___price = 'variants___price',
  variants___selectedOptions = 'variants___selectedOptions',
  variants___selectedOptions___name = 'variants___selectedOptions___name',
  variants___selectedOptions___value = 'variants___selectedOptions___value',
  variants___sku = 'variants___sku',
  variants___title = 'variants___title',
  variants___weight = 'variants___weight',
  variants___weightUnit = 'variants___weightUnit',
  variants___presentmentPrices___edges = 'variants___presentmentPrices___edges',
  variants___shopifyId = 'variants___shopifyId',
  options = 'options',
  options___id = 'options___id',
  options___parent___id = 'options___parent___id',
  options___parent___parent___id = 'options___parent___parent___id',
  options___parent___parent___children = 'options___parent___parent___children',
  options___parent___children = 'options___parent___children',
  options___parent___children___id = 'options___parent___children___id',
  options___parent___children___children = 'options___parent___children___children',
  options___parent___internal___content = 'options___parent___internal___content',
  options___parent___internal___contentDigest = 'options___parent___internal___contentDigest',
  options___parent___internal___description = 'options___parent___internal___description',
  options___parent___internal___fieldOwners = 'options___parent___internal___fieldOwners',
  options___parent___internal___ignoreType = 'options___parent___internal___ignoreType',
  options___parent___internal___mediaType = 'options___parent___internal___mediaType',
  options___parent___internal___owner = 'options___parent___internal___owner',
  options___parent___internal___type = 'options___parent___internal___type',
  options___children = 'options___children',
  options___children___id = 'options___children___id',
  options___children___parent___id = 'options___children___parent___id',
  options___children___parent___children = 'options___children___parent___children',
  options___children___children = 'options___children___children',
  options___children___children___id = 'options___children___children___id',
  options___children___children___children = 'options___children___children___children',
  options___children___internal___content = 'options___children___internal___content',
  options___children___internal___contentDigest = 'options___children___internal___contentDigest',
  options___children___internal___description = 'options___children___internal___description',
  options___children___internal___fieldOwners = 'options___children___internal___fieldOwners',
  options___children___internal___ignoreType = 'options___children___internal___ignoreType',
  options___children___internal___mediaType = 'options___children___internal___mediaType',
  options___children___internal___owner = 'options___children___internal___owner',
  options___children___internal___type = 'options___children___internal___type',
  options___internal___content = 'options___internal___content',
  options___internal___contentDigest = 'options___internal___contentDigest',
  options___internal___description = 'options___internal___description',
  options___internal___fieldOwners = 'options___internal___fieldOwners',
  options___internal___ignoreType = 'options___internal___ignoreType',
  options___internal___mediaType = 'options___internal___mediaType',
  options___internal___owner = 'options___internal___owner',
  options___internal___type = 'options___internal___type',
  options___name = 'options___name',
  options___values = 'options___values',
  options___shopifyId = 'options___shopifyId'
}

export type ShopifyProductFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  availableForSale?: Maybe<BooleanQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  descriptionHtml?: Maybe<StringQueryOperatorInput>,
  handle?: Maybe<StringQueryOperatorInput>,
  images?: Maybe<ShopifyProductImagesFilterListInput>,
  priceRange?: Maybe<ShopifyProductPriceRangeFilterInput>,
  productType?: Maybe<StringQueryOperatorInput>,
  publishedAt?: Maybe<DateQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  vendor?: Maybe<StringQueryOperatorInput>,
  shopifyId?: Maybe<StringQueryOperatorInput>,
  variants?: Maybe<ShopifyProductVariantFilterListInput>,
  options?: Maybe<ShopifyProductOptionFilterListInput>,
};

export type ShopifyProductFilterListInput = {
  elemMatch?: Maybe<ShopifyProductFilterInput>,
};

export type ShopifyProductGroupConnection = {
   __typename?: 'ShopifyProductGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ShopifyProductEdge>,
  nodes: Array<ShopifyProduct>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ShopifyProductImages = {
   __typename?: 'ShopifyProductImages',
  id?: Maybe<Scalars['String']>,
  originalSrc?: Maybe<Scalars['String']>,
  localFile?: Maybe<File>,
};

export type ShopifyProductImagesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  originalSrc?: Maybe<StringQueryOperatorInput>,
  localFile?: Maybe<FileFilterInput>,
};

export type ShopifyProductImagesFilterListInput = {
  elemMatch?: Maybe<ShopifyProductImagesFilterInput>,
};

export type ShopifyProductOption = Node & {
   __typename?: 'ShopifyProductOption',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  values?: Maybe<Array<Maybe<Scalars['String']>>>,
  shopifyId?: Maybe<Scalars['String']>,
};

export type ShopifyProductOptionConnection = {
   __typename?: 'ShopifyProductOptionConnection',
  totalCount: Scalars['Int'],
  edges: Array<ShopifyProductOptionEdge>,
  nodes: Array<ShopifyProductOption>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ShopifyProductOptionGroupConnection>,
};


export type ShopifyProductOptionConnectionDistinctArgs = {
  field: ShopifyProductOptionFieldsEnum
};


export type ShopifyProductOptionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ShopifyProductOptionFieldsEnum
};

export type ShopifyProductOptionEdge = {
   __typename?: 'ShopifyProductOptionEdge',
  next?: Maybe<ShopifyProductOption>,
  node: ShopifyProductOption,
  previous?: Maybe<ShopifyProductOption>,
};

export enum ShopifyProductOptionFieldsEnum {
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
  name = 'name',
  values = 'values',
  shopifyId = 'shopifyId'
}

export type ShopifyProductOptionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  values?: Maybe<StringQueryOperatorInput>,
  shopifyId?: Maybe<StringQueryOperatorInput>,
};

export type ShopifyProductOptionFilterListInput = {
  elemMatch?: Maybe<ShopifyProductOptionFilterInput>,
};

export type ShopifyProductOptionGroupConnection = {
   __typename?: 'ShopifyProductOptionGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ShopifyProductOptionEdge>,
  nodes: Array<ShopifyProductOption>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ShopifyProductOptionSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductOptionFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ShopifyProductPriceRange = {
   __typename?: 'ShopifyProductPriceRange',
  minVariantPrice?: Maybe<ShopifyProductPriceRangeMinVariantPrice>,
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeMaxVariantPrice>,
};

export type ShopifyProductPriceRangeFilterInput = {
  minVariantPrice?: Maybe<ShopifyProductPriceRangeMinVariantPriceFilterInput>,
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeMaxVariantPriceFilterInput>,
};

export type ShopifyProductPriceRangeMaxVariantPrice = {
   __typename?: 'ShopifyProductPriceRangeMaxVariantPrice',
  amount?: Maybe<Scalars['String']>,
  currencyCode?: Maybe<Scalars['String']>,
};

export type ShopifyProductPriceRangeMaxVariantPriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>,
  currencyCode?: Maybe<StringQueryOperatorInput>,
};

export type ShopifyProductPriceRangeMinVariantPrice = {
   __typename?: 'ShopifyProductPriceRangeMinVariantPrice',
  amount?: Maybe<Scalars['String']>,
  currencyCode?: Maybe<Scalars['String']>,
};

export type ShopifyProductPriceRangeMinVariantPriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>,
  currencyCode?: Maybe<StringQueryOperatorInput>,
};

export type ShopifyProductSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ShopifyProductVariant = Node & {
   __typename?: 'ShopifyProductVariant',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  availableForSale?: Maybe<Scalars['Boolean']>,
  image?: Maybe<ShopifyProductVariantImage>,
  price?: Maybe<Scalars['String']>,
  selectedOptions?: Maybe<Array<Maybe<ShopifyProductVariantSelectedOptions>>>,
  sku?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  weight?: Maybe<Scalars['Int']>,
  weightUnit?: Maybe<Scalars['String']>,
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPrices>,
  shopifyId?: Maybe<Scalars['String']>,
};

export type ShopifyProductVariantConnection = {
   __typename?: 'ShopifyProductVariantConnection',
  totalCount: Scalars['Int'],
  edges: Array<ShopifyProductVariantEdge>,
  nodes: Array<ShopifyProductVariant>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ShopifyProductVariantGroupConnection>,
};


export type ShopifyProductVariantConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldsEnum
};


export type ShopifyProductVariantConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ShopifyProductVariantFieldsEnum
};

export type ShopifyProductVariantEdge = {
   __typename?: 'ShopifyProductVariantEdge',
  next?: Maybe<ShopifyProductVariant>,
  node: ShopifyProductVariant,
  previous?: Maybe<ShopifyProductVariant>,
};

export enum ShopifyProductVariantFieldsEnum {
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
  availableForSale = 'availableForSale',
  image___id = 'image___id',
  image___originalSrc = 'image___originalSrc',
  image___localFile___birthtime = 'image___localFile___birthtime',
  image___localFile___birthtimeMs = 'image___localFile___birthtimeMs',
  image___localFile___sourceInstanceName = 'image___localFile___sourceInstanceName',
  image___localFile___absolutePath = 'image___localFile___absolutePath',
  image___localFile___relativePath = 'image___localFile___relativePath',
  image___localFile___extension = 'image___localFile___extension',
  image___localFile___size = 'image___localFile___size',
  image___localFile___prettySize = 'image___localFile___prettySize',
  image___localFile___modifiedTime = 'image___localFile___modifiedTime',
  image___localFile___accessTime = 'image___localFile___accessTime',
  image___localFile___changeTime = 'image___localFile___changeTime',
  image___localFile___birthTime = 'image___localFile___birthTime',
  image___localFile___root = 'image___localFile___root',
  image___localFile___dir = 'image___localFile___dir',
  image___localFile___base = 'image___localFile___base',
  image___localFile___ext = 'image___localFile___ext',
  image___localFile___name = 'image___localFile___name',
  image___localFile___relativeDirectory = 'image___localFile___relativeDirectory',
  image___localFile___dev = 'image___localFile___dev',
  image___localFile___mode = 'image___localFile___mode',
  image___localFile___nlink = 'image___localFile___nlink',
  image___localFile___uid = 'image___localFile___uid',
  image___localFile___gid = 'image___localFile___gid',
  image___localFile___rdev = 'image___localFile___rdev',
  image___localFile___blksize = 'image___localFile___blksize',
  image___localFile___ino = 'image___localFile___ino',
  image___localFile___blocks = 'image___localFile___blocks',
  image___localFile___atimeMs = 'image___localFile___atimeMs',
  image___localFile___mtimeMs = 'image___localFile___mtimeMs',
  image___localFile___ctimeMs = 'image___localFile___ctimeMs',
  image___localFile___atime = 'image___localFile___atime',
  image___localFile___mtime = 'image___localFile___mtime',
  image___localFile___ctime = 'image___localFile___ctime',
  image___localFile___url = 'image___localFile___url',
  image___localFile___publicURL = 'image___localFile___publicURL',
  image___localFile___childImageSharp___id = 'image___localFile___childImageSharp___id',
  image___localFile___childImageSharp___children = 'image___localFile___childImageSharp___children',
  image___localFile___id = 'image___localFile___id',
  image___localFile___parent___id = 'image___localFile___parent___id',
  image___localFile___parent___children = 'image___localFile___parent___children',
  image___localFile___children = 'image___localFile___children',
  image___localFile___children___id = 'image___localFile___children___id',
  image___localFile___children___children = 'image___localFile___children___children',
  image___localFile___internal___content = 'image___localFile___internal___content',
  image___localFile___internal___contentDigest = 'image___localFile___internal___contentDigest',
  image___localFile___internal___description = 'image___localFile___internal___description',
  image___localFile___internal___fieldOwners = 'image___localFile___internal___fieldOwners',
  image___localFile___internal___ignoreType = 'image___localFile___internal___ignoreType',
  image___localFile___internal___mediaType = 'image___localFile___internal___mediaType',
  image___localFile___internal___owner = 'image___localFile___internal___owner',
  image___localFile___internal___type = 'image___localFile___internal___type',
  price = 'price',
  selectedOptions = 'selectedOptions',
  selectedOptions___name = 'selectedOptions___name',
  selectedOptions___value = 'selectedOptions___value',
  sku = 'sku',
  title = 'title',
  weight = 'weight',
  weightUnit = 'weightUnit',
  presentmentPrices___edges = 'presentmentPrices___edges',
  shopifyId = 'shopifyId'
}

export type ShopifyProductVariantFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  availableForSale?: Maybe<BooleanQueryOperatorInput>,
  image?: Maybe<ShopifyProductVariantImageFilterInput>,
  price?: Maybe<StringQueryOperatorInput>,
  selectedOptions?: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>,
  sku?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  weight?: Maybe<IntQueryOperatorInput>,
  weightUnit?: Maybe<StringQueryOperatorInput>,
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPricesFilterInput>,
  shopifyId?: Maybe<StringQueryOperatorInput>,
};

export type ShopifyProductVariantFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantFilterInput>,
};

export type ShopifyProductVariantGroupConnection = {
   __typename?: 'ShopifyProductVariantGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ShopifyProductVariantEdge>,
  nodes: Array<ShopifyProductVariant>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ShopifyProductVariantImage = {
   __typename?: 'ShopifyProductVariantImage',
  id?: Maybe<Scalars['String']>,
  originalSrc?: Maybe<Scalars['String']>,
  localFile?: Maybe<File>,
};

export type ShopifyProductVariantImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  originalSrc?: Maybe<StringQueryOperatorInput>,
  localFile?: Maybe<FileFilterInput>,
};

export type ShopifyProductVariantPresentmentPrices = {
   __typename?: 'ShopifyProductVariantPresentmentPrices',
  edges?: Maybe<Array<Maybe<ShopifyProductVariantPresentmentPricesEdges>>>,
};

export type ShopifyProductVariantPresentmentPricesEdges = {
   __typename?: 'ShopifyProductVariantPresentmentPricesEdges',
  node?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNode>,
};

export type ShopifyProductVariantPresentmentPricesEdgesFilterInput = {
  node?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodeFilterInput>,
};

export type ShopifyProductVariantPresentmentPricesEdgesFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantPresentmentPricesEdgesFilterInput>,
};

export type ShopifyProductVariantPresentmentPricesEdgesNode = {
   __typename?: 'ShopifyProductVariantPresentmentPricesEdgesNode',
  price?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodePrice>,
};

export type ShopifyProductVariantPresentmentPricesEdgesNodeFilterInput = {
  price?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodePriceFilterInput>,
};

export type ShopifyProductVariantPresentmentPricesEdgesNodePrice = {
   __typename?: 'ShopifyProductVariantPresentmentPricesEdgesNodePrice',
  amount?: Maybe<Scalars['String']>,
  currencyCode?: Maybe<Scalars['String']>,
};

export type ShopifyProductVariantPresentmentPricesEdgesNodePriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>,
  currencyCode?: Maybe<StringQueryOperatorInput>,
};

export type ShopifyProductVariantPresentmentPricesFilterInput = {
  edges?: Maybe<ShopifyProductVariantPresentmentPricesEdgesFilterListInput>,
};

export type ShopifyProductVariantSelectedOptions = {
   __typename?: 'ShopifyProductVariantSelectedOptions',
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type ShopifyProductVariantSelectedOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  value?: Maybe<StringQueryOperatorInput>,
};

export type ShopifyProductVariantSelectedOptionsFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantSelectedOptionsFilterInput>,
};

export type ShopifyProductVariantSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductVariantFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
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
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
   __typename?: 'SitePageContext',
  id?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  shopifyHandle?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  shopifyHandle?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
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
  context___id = 'context___id',
  context___slug = 'context___slug',
  context___shopifyHandle = 'context___shopifyHandle',
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
  pluginCreator___pluginOptions___component = 'pluginCreator___pluginOptions___component',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___projectId = 'pluginCreator___pluginOptions___projectId',
  pluginCreator___pluginOptions___dataset = 'pluginCreator___pluginOptions___dataset',
  pluginCreator___pluginOptions___token = 'pluginCreator___pluginOptions___token',
  pluginCreator___pluginOptions___overlayDrafts = 'pluginCreator___pluginOptions___overlayDrafts',
  pluginCreator___pluginOptions___watchMode = 'pluginCreator___pluginOptions___watchMode',
  pluginCreator___pluginOptions___shopName = 'pluginCreator___pluginOptions___shopName',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator___pluginOptions___accessToken',
  pluginCreator___pluginOptions___includeCollections = 'pluginCreator___pluginOptions___includeCollections',
  pluginCreator___pluginOptions___exclude = 'pluginCreator___pluginOptions___exclude',
  pluginCreator___pluginOptions___siteUrl = 'pluginCreator___pluginOptions___siteUrl',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator___pluginOptions___trackingId',
  pluginCreator___pluginOptions___head = 'pluginCreator___pluginOptions___head',
  pluginCreator___pluginOptions___anonymize = 'pluginCreator___pluginOptions___anonymize',
  pluginCreator___pluginOptions___respectDNT = 'pluginCreator___pluginOptions___respectDNT',
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
  componentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
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
  pluginOptions___component = 'pluginOptions___component',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___projectId = 'pluginOptions___projectId',
  pluginOptions___dataset = 'pluginOptions___dataset',
  pluginOptions___token = 'pluginOptions___token',
  pluginOptions___overlayDrafts = 'pluginOptions___overlayDrafts',
  pluginOptions___watchMode = 'pluginOptions___watchMode',
  pluginOptions___shopName = 'pluginOptions___shopName',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___includeCollections = 'pluginOptions___includeCollections',
  pluginOptions___exclude = 'pluginOptions___exclude',
  pluginOptions___siteUrl = 'pluginOptions___siteUrl',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___head = 'pluginOptions___head',
  pluginOptions___anonymize = 'pluginOptions___anonymize',
  pluginOptions___respectDNT = 'pluginOptions___respectDNT',
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
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['String']>,
  dataset?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  overlayDrafts?: Maybe<Scalars['Boolean']>,
  watchMode?: Maybe<Scalars['Boolean']>,
  shopName?: Maybe<Scalars['String']>,
  accessToken?: Maybe<Scalars['String']>,
  includeCollections?: Maybe<Array<Maybe<Scalars['String']>>>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  siteUrl?: Maybe<Scalars['String']>,
  trackingId?: Maybe<Scalars['String']>,
  head?: Maybe<Scalars['Boolean']>,
  anonymize?: Maybe<Scalars['Boolean']>,
  respectDNT?: Maybe<Scalars['Boolean']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  projectId?: Maybe<StringQueryOperatorInput>,
  dataset?: Maybe<StringQueryOperatorInput>,
  token?: Maybe<StringQueryOperatorInput>,
  overlayDrafts?: Maybe<BooleanQueryOperatorInput>,
  watchMode?: Maybe<BooleanQueryOperatorInput>,
  shopName?: Maybe<StringQueryOperatorInput>,
  accessToken?: Maybe<StringQueryOperatorInput>,
  includeCollections?: Maybe<StringQueryOperatorInput>,
  exclude?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
  trackingId?: Maybe<StringQueryOperatorInput>,
  head?: Maybe<BooleanQueryOperatorInput>,
  anonymize?: Maybe<BooleanQueryOperatorInput>,
  respectDNT?: Maybe<BooleanQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  siteUrl?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type GatsbySanityImageFixedFragment = (
  { __typename?: 'SanityImageFixed' }
  & Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbySanityImageFixed_NoBase64Fragment = (
  { __typename?: 'SanityImageFixed' }
  & Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbySanityImageFixed_WithWebpFragment = (
  { __typename?: 'SanityImageFixed' }
  & Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbySanityImageFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'SanityImageFixed' }
  & Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbySanityImageFluidFragment = (
  { __typename?: 'SanityImageFluid' }
  & Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbySanityImageFluid_NoBase64Fragment = (
  { __typename?: 'SanityImageFluid' }
  & Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbySanityImageFluid_WithWebpFragment = (
  { __typename?: 'SanityImageFluid' }
  & Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbySanityImageFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'SanityImageFluid' }
  & Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type NavPagesFragment = (
  { __typename?: 'SanityNavGroup' }
  & { pages: Maybe<Array<Maybe<(
    { __typename?: 'SanityPageReference' }
    & { page: Maybe<(
      { __typename?: 'SanityPage' }
      & Pick<SanityPage, 'title'>
      & { slug: Maybe<(
        { __typename?: 'SanitySlug' }
        & Pick<SanitySlug, 'current'>
      )> }
    )> }
  )>>> }
);

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { sanitySiteSettings: Maybe<(
    { __typename?: 'SanitySiteSettings' }
    & { primaryNav: Maybe<(
      { __typename?: 'SanityNavGroup' }
      & NavPagesFragment
    )>, secondaryNav: Maybe<(
      { __typename?: 'SanityNavGroup' }
      & NavPagesFragment
    )>, social: Maybe<(
      { __typename?: 'SanitySocial' }
      & Pick<SanitySocial, 'facebook' | 'instagram' | 'vimeo'>
    )> }
  )> }
);

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'description'>
    )> }
  )>, sanitySiteSettings: Maybe<(
    { __typename?: 'SanitySiteSettings' }
    & { seo: Maybe<(
      { __typename?: 'SanitySeo' }
      & Pick<SanitySeo, 'title' | 'description'>
      & { image: Maybe<(
        { __typename?: 'SanityMainImage' }
        & OgImageFragment
      )> }
    )> }
  )> }
);

export type ComparisonImageFragment = (
  { __typename?: 'SanityMainImage' }
  & { asset: Maybe<(
    { __typename?: 'SanityImageAsset' }
    & { fluid: Maybe<(
      { __typename?: 'SanityImageFluid' }
      & GatsbySanityImageFluidFragment
    )> }
  )> }
);

export type CardImageFragment = (
  { __typename?: 'SanityMainImage' }
  & { asset: Maybe<(
    { __typename?: 'SanityImageAsset' }
    & { fluid: Maybe<(
      { __typename?: 'SanityImageFluid' }
      & GatsbySanityImageFluidFragment
    )> }
  )> }
);

export type OgImageFragment = (
  { __typename?: 'SanityMainImage' }
  & { asset: Maybe<(
    { __typename?: 'SanityImageAsset' }
    & { fixed: Maybe<(
      { __typename?: 'SanityImageFixed' }
      & Pick<SanityImageFixed, 'src'>
    )> }
  )> }
);

export type ImageMetaFragment = (
  { __typename?: 'SanityImageAsset' }
  & { metadata: Maybe<(
    { __typename?: 'SanityImageMetadata' }
    & { palette: Maybe<(
      { __typename?: 'SanityImagePalette' }
      & { dominant: Maybe<(
        { __typename?: 'SanityImagePaletteSwatch' }
        & Pick<SanityImagePaletteSwatch, 'background'>
      )> }
    )> }
  )> }
);

export type ProductCardFragment = (
  { __typename?: 'SanityProduct' }
  & Pick<SanityProduct, 'id' | 'title' | 'description'>
  & { slug: Maybe<(
    { __typename?: 'SanitySlug' }
    & Pick<SanitySlug, 'current'>
  )>, image: Maybe<(
    { __typename?: 'SanityMainImage' }
    & CardImageFragment
  )> }
);

export type FeatureTextFragment = (
  { __typename?: 'SanityFeatureText' }
  & Pick<SanityFeatureText, '_key' | '_type' | 'layout' | 'heading' | 'text'>
);

export type FeatureTextGroupFragment = (
  { __typename?: 'SanityFeatureTextGroup' }
  & Pick<SanityFeatureTextGroup, '_key' | '_type'>
  & { items: Maybe<Array<Maybe<(
    { __typename?: 'SanityFeatureTextGroupText' }
    & Pick<SanityFeatureTextGroupText, '_key' | 'heading' | 'text'>
  )>>> }
);

export type GridListFragment = (
  { __typename?: 'SanityGridList' }
  & Pick<SanityGridList, '_key' | '_type' | 'heading' | 'listItems'>
);

export type RichTextFragment = (
  { __typename?: 'SanityRichText' }
  & Pick<SanityRichText, '_key' | '_type'>
);

export type VimeoFragment = (
  { __typename?: 'SanityVimeo' }
  & Pick<SanityVimeo, '_key' | '_type' | 'title'>
  & { data: Maybe<(
    { __typename?: 'SanityVideoData' }
    & Pick<SanityVideoData, 'url' | 'width' | 'height' | 'thumbnail'>
  )>, image: Maybe<(
    { __typename?: 'SanityMainImage' }
    & { asset: Maybe<(
      { __typename?: 'SanityImageAsset' }
      & { fluid: Maybe<(
        { __typename?: 'SanityImageFluid' }
        & GatsbySanityImageFluidFragment
      )> }
    )> }
  )> }
);

export type ImageComparisonFragment = (
  { __typename?: 'SanityImageComparison' }
  & Pick<SanityImageComparison, '_key' | '_type' | 'name' | 'description'>
  & { beforeImage: Maybe<(
    { __typename?: 'SanityMainImage' }
    & ComparisonImageFragment
  )>, afterImage: Maybe<(
    { __typename?: 'SanityMainImage' }
    & ComparisonImageFragment
  )> }
);

export type ImageComparisonGroupFragment = (
  { __typename?: 'SanityImageComparisonGroup' }
  & Pick<SanityImageComparisonGroup, '_key' | '_type'>
  & { items: Maybe<Array<Maybe<(
    { __typename?: 'SanityImageComparison' }
    & ImageComparisonFragment
  )>>> }
);

export type InlineImageFragment = (
  { __typename?: 'SanityInlineImage' }
  & Pick<SanityInlineImage, '_key' | '_type' | 'alt'>
  & { image: Maybe<(
    { __typename?: 'SanityMainImage' }
    & { asset: Maybe<(
      { __typename?: 'SanityImageAsset' }
      & { fluid: Maybe<(
        { __typename?: 'SanityImageFluid' }
        & GatsbySanityImageFluidFragment
      )>, metadata: Maybe<(
        { __typename?: 'SanityImageMetadata' }
        & { dimensions: Maybe<(
          { __typename?: 'SanityImageDimensions' }
          & Pick<SanityImageDimensions, 'width'>
        )> }
      )> }
    )> }
  )> }
);

export type HeroFragment = (
  { __typename?: 'SanityHero' }
  & Pick<SanityHero, 'title' | 'intro'>
  & { image: Maybe<(
    { __typename?: 'SanityMainImage' }
    & { asset: Maybe<(
      { __typename?: 'SanityImageAsset' }
      & { fluid: Maybe<(
        { __typename?: 'SanityImageFluid' }
        & GatsbySanityImageFluidFragment
      )> }
      & ImageMetaFragment
    )> }
  )>, button: Maybe<(
    { __typename?: 'SanityHeroButton' }
    & Pick<SanityHeroButton, 'text'>
    & { link: Maybe<(
      { __typename?: 'SanityPage' }
      & { slug: Maybe<(
        { __typename?: 'SanitySlug' }
        & Pick<SanitySlug, 'current'>
      )> }
    )> }
  )> }
);

export type ProductGroupFragment = (
  { __typename?: 'SanityProductGroup' }
  & Pick<SanityProductGroup, '_key' | '_type' | 'title'>
  & { products: Maybe<Array<Maybe<(
    { __typename?: 'SanityProductReference' }
    & { product: Maybe<(
      { __typename?: 'SanityProduct' }
      & ProductCardFragment
    )> }
  )>>> }
);

export type FormFragment = (
  { __typename?: 'SanityForm' }
  & Pick<SanityForm, '_key' | '_type' | 'type'>
);

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = (
  { __typename?: 'Query' }
  & { file: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      )> }
    )> }
  )> }
);

export type PageTemplateQueryQueryVariables = {
  id: Scalars['String']
};


export type PageTemplateQueryQuery = (
  { __typename?: 'Query' }
  & { sanityPage: Maybe<(
    { __typename?: 'SanityPage' }
    & Pick<SanityPage, 'title' | 'description' | '_rawModules'>
    & { slug: Maybe<(
      { __typename?: 'SanitySlug' }
      & Pick<SanitySlug, 'current'>
    )>, image: Maybe<(
      { __typename?: 'SanityMainImage' }
      & OgImageFragment
    )>, hero: Maybe<(
      { __typename?: 'SanityHero' }
      & HeroFragment
    )>, modules: Maybe<Array<Maybe<(
      { __typename?: 'SanityFeatureText' }
      & FeatureTextFragment
    ) | (
      { __typename?: 'SanityFeatureTextGroup' }
      & FeatureTextGroupFragment
    ) | (
      { __typename?: 'SanityForm' }
      & FormFragment
    ) | { __typename?: 'SanityGridList' } | (
      { __typename?: 'SanityImageComparison' }
      & ImageComparisonFragment
    ) | (
      { __typename?: 'SanityImageComparisonGroup' }
      & ImageComparisonGroupFragment
    ) | (
      { __typename?: 'SanityInlineImage' }
      & InlineImageFragment
    ) | (
      { __typename?: 'SanityProductGroup' }
      & ProductGroupFragment
    ) | (
      { __typename?: 'SanityRichText' }
      & RichTextFragment
    ) | (
      { __typename?: 'SanityVimeo' }
      & VimeoFragment
    )>>> }
  )> }
);

export type ProductTemplateQueryQueryVariables = {
  id: Scalars['String'],
  shopifyHandle: Scalars['String']
};


export type ProductTemplateQueryQuery = (
  { __typename?: 'Query' }
  & { sanityProduct: Maybe<(
    { __typename?: 'SanityProduct' }
    & Pick<SanityProduct, 'title' | 'description' | '_rawModules'>
    & { image: Maybe<(
      { __typename?: 'SanityMainImage' }
      & OgImageFragment
    )>, hero: Maybe<(
      { __typename?: 'SanityHero' }
      & HeroFragment
    )>, modules: Maybe<Array<Maybe<(
      { __typename?: 'SanityFeatureText' }
      & FeatureTextFragment
    ) | (
      { __typename?: 'SanityFeatureTextGroup' }
      & FeatureTextGroupFragment
    ) | (
      { __typename?: 'SanityForm' }
      & FormFragment
    ) | (
      { __typename?: 'SanityGridList' }
      & GridListFragment
    ) | (
      { __typename?: 'SanityImageComparison' }
      & ImageComparisonFragment
    ) | (
      { __typename?: 'SanityImageComparisonGroup' }
      & ImageComparisonGroupFragment
    ) | (
      { __typename?: 'SanityInlineImage' }
      & InlineImageFragment
    ) | (
      { __typename?: 'SanityProductGroup' }
      & ProductGroupFragment
    ) | (
      { __typename?: 'SanityRichText' }
      & RichTextFragment
    ) | (
      { __typename?: 'SanityVimeo' }
      & VimeoFragment
    )>>>, shopifyDefaultVariant: Maybe<(
      { __typename?: 'SanityShopifyVariant' }
      & Pick<SanityShopifyVariant, 'price'>
    )> }
  )>, shopifyProduct: Maybe<(
    { __typename?: 'ShopifyProduct' }
    & Pick<ShopifyProduct, 'shopifyId'>
  )> }
);

export type ProductsTemplateQueryQueryVariables = {
  id: Scalars['String']
};


export type ProductsTemplateQueryQuery = (
  { __typename?: 'Query' }
  & { sanityPage: Maybe<(
    { __typename?: 'SanityPage' }
    & Pick<SanityPage, 'title' | 'description'>
    & { image: Maybe<(
      { __typename?: 'SanityMainImage' }
      & OgImageFragment
    )>, hero: Maybe<(
      { __typename?: 'SanityHero' }
      & HeroFragment
    )> }
  )>, allSanityProduct: (
    { __typename?: 'SanityProductConnection' }
    & { edges: Array<(
      { __typename?: 'SanityProductEdge' }
      & { node: (
        { __typename?: 'SanityProduct' }
        & ProductCardFragment
      ) }
    )> }
  ) }
);
