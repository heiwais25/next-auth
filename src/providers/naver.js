export default (options) => {
	return {
		id: "naver",
		name: "Naver",
		type: "oauth",
		version: "2.0",
		params: { grant_type: "authorization_code" },
		profileUrl: "https://openapi.naver.com/v1/nid/me",
		accessTokenUrl: "https://nid.naver.com/oauth2.0/token",
		authorizationUrl: "https://nid.naver.com/oauth2.0/authorize?response_type=code",
		profile: (profile) => {
			return {
				id: profile.response.id,
				name: profile.response.name,
				email: profile.response.email,
				image: profile.response.image,
			};
		},
		...options,
	};
};
