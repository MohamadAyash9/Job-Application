function whatever() {
  var text = "";
  var chars= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += chars.charAt(Math.floor(Math.random() * chars.length));

  return text;
}

console.log(whatever());
