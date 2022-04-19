const { isDate } = require("util/types");

const issue = {
  title: "Semana 2",
  repositoryNameAssociated: "MissionNodeJs",
  status: "Open",
  numberOfComments: 350,
  labels: 30,
  author: "Andrea",
  dateCreated: "April",
  lastUpdate: "April",
  getTotalIssues: function () {
    return this.labels;
  },
  getGeneralInfo: function () {
    return ` titulo: ${this.title}, Repository: ${this.repositoryNameAssociated}, status: ${this.status}`;
  },
};

console.log("General information: " + issue.title);
console.log(issue.getGeneralInfo());
console.log(issue.getTotalIssues());
