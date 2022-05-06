module.meta = {
  name: "test",
  version: "2.1.3",
};
module.exports = {
  data: 1,
  exec() {
    document.write(this.data);
    clear();
  },
};
