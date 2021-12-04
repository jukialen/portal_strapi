module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  proxy: true,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6a1a0de1abbca755fbdf7501ac3976f4'),
    },
  },
});
