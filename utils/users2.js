const users = [];
// Join user to chat
function userJoin2(id, username, room) {
  const user = { id, username, room };
  users.push(user);
  return user;
}
// Get current user
function getCurrentUser2(id) {
  return users.find(user => user.id === id);
}
// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}
module.exports = {
  userJoin2,
  getCurrentUser2,   
};
