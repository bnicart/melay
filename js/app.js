function appCtrl() {
  var vm = this;

  vm.mainTopics = [
    {
      id: 1,
      title: "Computer-Based Information Systems", is_active: true,
      sub_topics: [
        {id: 1, title: "Systems Analysis", by: "Melanie Mae S. Sta Ana - MAPA", is_active: true, url: "templates/1/1.html"},
        {id: 2, title: "Systems Design and Implementation", by: "Melanie Mae S. Sta Ana - MAPA", is_active: false, url: "templates/1/2.html"},
        {id: 3, title: "Transaction Processing Information Systems (TPIS)", by: "Jasmin U. Atela - MBA", is_active: false, url: "templates/1/3.html"},
        {id: 4, title: "Management Information Systems (MIS)", by: "Jasmin U. Atela - MBA", is_active: false, url: "templates/1/4.html"},
        {id: 5, title: "Decision Support Systems (DSS)", by: "Lucio Vergara - MAPA", is_active: false, url: "templates/1/5.html"},
        {id: 6, title: "Artificial Intelligence and Expert Systems", by: "Lucio Vergara - MAPA", is_active: false, url: "templates/1/6.html"},
      ]
    },
    {
      id: 2,
      title: "The Rewards and Risks of the Information Age", is_active: false,
      sub_topics: [
        {id: 1, title: "Managing Information Resources", by: "Michelle B. Tuazon - MBA", is_active: false, url: "templates/2/1.html"},
        {id: 2, title: "The Future", by: "Garry Carlo B. Abengona - MBA", is_active: false, url: "templates/2/2.html"},
      ]
    },
    {
      id: 3,
      title: "Current Applications of Computers", is_active: false,
      sub_topics: [
        {id: 1, title: "Education", by: "Cristhy L. Palomo - MAEM", is_active: false, url: "templates/3/1.html"},
        {id: 2, title: "Science and Research", by: "Cristhy L. Palomo - MAEM", is_active: false, url: "templates/3/2.html"},
        {id: 3, title: "Entertainment", by: " Tricia Ann Lee P. Sarmiento - MBA", is_active: false, url: "templates/3/3.html"},
        {id: 4, title: "Production/Manufacturing", by: " Tricia Ann Lee P. Sarmiento - MBA", is_active: false, url: "templates/3/4.html"},
        {id: 5, title: "Medicine", by: "Camille Gonzales - MBA", is_active: false, url: "templates/3/5.html"},
        {id: 6, title: "Business", by: "Camille Gonzales - MBA", is_active: false, url: "templates/3/6.html"},
        {id: 7, title: "Transportation", by: "Dynehgre Casasola - MAIP", is_active: false, url: "templates/3/7.html"},
        {id: 8, title: "Arts", by: "Dynehgre Casasola - MAIP", is_active: false, url: "templates/3/8.html"},
      ]
    }
  ];

  vm.chosenTopic = vm.mainTopics[0];
  vm.chosenSubTopic = vm.mainTopics[0].sub_topics[0];

  vm.setActiveToFalse = function(topics) {
    topics.map(function(topic) {
      return topic.is_active = false;
    });
  };

  vm.chooseTopic = function(topic) {
    vm.setActiveToFalse(vm.mainTopics);
    vm.setActiveToFalse(topic.sub_topics);
    topic.is_active = true;
    vm.chosenTopic = topic;
    vm.chosenSubTopic = topic.sub_topics[0];
    vm.chosenSubTopic.is_active = true;
  }

  vm.chooseSubTopic = function(topic, sub_topic) {
    vm.setActiveToFalse(topic.sub_topics);
    sub_topic.is_active = true;
    vm.chosenSubTopic = sub_topic;
  }
}

appCtrl.$inject = [];

angular
  .module('app', [])
  .controller('appCtrl', appCtrl);
