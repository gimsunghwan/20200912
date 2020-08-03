var express = require('express');
var router = express.Router();
const { prisma } = require('../prisma-client');

router.post('/signup', async (req, res) => {
  try {
    const { provider, accessToken } = req.body;
    let serviceId = null;
    let name = null;
    if (provider === 'google') {
      const res = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const payload = await res.json();
      serviceId = payload.id;
      name = payload.name;
    } else if (provider === 'facebook') {
      const res = await fetch('https://graph.facebook.com/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const payload = await res.json();
      serviceId = payload.id;
      name = payload.name;
    } else if (provider === 'kakao') {
      const res = await fetch('https://kapi.kakao.com/v2/user/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const payload = await res.json();
      serviceId = String(payload.id);
      name = payload.properties.nickname;
    } else if (provider === 'naver') {
      const res = await fetch('https://openapi.naver.com/v1/nid/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const payload = await res.json();
      serviceId = payload.response.id;
      name = payload.response.name;
    }

    if (!serviceId || !name) {
      throw new Error('serviceId or name is not recognized');
    }

    const key = Buffer.from(`${provider}${serviceId}`).toString('base64');
    const user = await prisma.upsertUser({
      where: {
        key,
      },
      update: {
        provider,
        name,
      },
      create: {
        key,
        provider,
        name,
      },
    });
    res.send({ user });
  } catch (err) {
    console.log(err);
    res.status(400).send(String(err));
  }
});

module.exports = router;
