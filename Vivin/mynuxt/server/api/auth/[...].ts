
import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";


const appConfig = useAppConfig();

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: 'your-secret-here',
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: appConfig.GITHUB_CLIENT_ID,
      clientSecret: appConfig.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages:{
    signIn:('/login')
  }
})


  