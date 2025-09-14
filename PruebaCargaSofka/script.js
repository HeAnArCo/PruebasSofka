import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

const users = new SharedArray('usuarios', function () {
  const f = open('./usuarios.csv');
  return f
    .split('\n')
    .slice(1)
    .filter(line => line.trim() !== '')
    .map(line => {
      const [user, passwd] = line.split(',');
      return { user: user.trim(), passwd: passwd.trim() };
    });
});

export const options = {
  vus: 5,
  duration: '20s',
  thresholds: {
    http_req_duration: ['p(95)<1500'], // máx 1.5s
    http_req_failed: ['rate<0.03'],   // < 3% errores
    http_reqs: ['rate>20'],           // mínimo 20 TPS
  },
};

export default function () {
  const creds = users[Math.floor(Math.random() * users.length)];
  let res = http.post('https://test-api.com/login', {
    username: creds.user,
    password: creds.passwd,
  });

  check(res, {
    'status 200': (r) => r.status === 200,
    'respuesta rápida': (r) => r.timings.duration < 1500,
  });

  sleep(1);
}