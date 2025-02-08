declare namespace NodeJS {
  interface ProcessEnv {
    PRIVATE_KEY: PathOrFileDescriptor
    PRIVATE_CERT: PathOrFileDescriptor
    PORT: number
    MONGO_URI: string
  }
}
