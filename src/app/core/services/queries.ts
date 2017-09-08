export class Queries {
  public static queries = {
		login: `
      query Login($email:String!,$password:String!) {
        credentials(email:$email,password:$password) {
          token
        }
      }
    `
	}
}