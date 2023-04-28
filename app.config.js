import "dotenv/config";

const googleMapsApiKey = process.env.GOOGLE_API_KEY;

export default {
  expo: {
    extra: {
      googleMapsApiKey,
    },
  },
};
