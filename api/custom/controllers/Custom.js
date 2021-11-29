"use strict";

module.exports = {
  async logout(ctx) {
    const token = ctx.cookies.get('user');
    const tokenSig = ctx.cookies.get('user.sig');

    if (token != undefined) {
      ctx.cookies.set('user', null);
      ctx.cookies.set('user.sig', null);

      ctx.send({
        authorized: true,
        message: "Successfully logged out.",
      });
    } else {
      ctx.send({
        authorized: false,
        message: "Unable to logout. You are not logged in.",
      });
    }

  }
};