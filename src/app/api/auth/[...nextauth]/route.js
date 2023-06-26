import User from "@/model/user";
import { connectToDb } from "@/utils/connectToDb";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({session}) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      session.user.username = sessionUser?.username?.toString();
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDb();
        const user = await User.findOne({ email: profile.email });
        if (!user) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(/ /g,"").toLowerCase(),
            image: profile.picture
          })
        }
        return true
      } catch (error) {
        console.log(error);
      }
    }
  }
})

export { handler as GET, handler as POST }
