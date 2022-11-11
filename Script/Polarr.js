const sta = typeof $task !== "undefined" ? "HTTP/1.1 200 OK" : 200;
const res = $response;
const req = $request;

if (res.body && req.method == "PUT") {
  $done({
    body: JSON.stringify({
      "app": "PPE",
      "isUnlimited": true,
      "membershipExpiryDate": "2028-06-06T08:00:00.000Z"
    }),
    status: sta,
    headers: res.headers
  });
} else {
  $done({});
}
