"use strict";
module.exports = {
  async logout(ctx) {
    ctx.cookies.set("user", null);
    ctx.send({
      authorized: true,
      message: "Successfully destroyed session",
    });
  },
};