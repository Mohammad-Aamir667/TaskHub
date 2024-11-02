const defaultEmployees = [
  {
    id: 1,
    firstName: "John",
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        active: false,  
        newTask: true,
        completed: false,
        failed: false,
        title: "Complete the report",
        description: "Complete the report",
        date: "2024-10-30",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Attend team meeting",
        description: "Attend team meeting",
        date: "2024-10-25",
        category: "Meeting"
      },
      {
        active: false, 
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare presentation",
        description: "Prepare presentation",
        date: "2024-11-01",
        category: "Presentation"
      }
    ],
    taskSummary: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Jane",
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        active: false, 
        newTask: true,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Client follow-up",
        date: "2024-10-28",
        category: "Communication"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Submit financial forecast",
        description: "Submit financial forecast",
        date: "2024-11-05",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team brainstorming session",
        description: "Team brainstorming session",
        date: "2024-10-26",
        category: "Meeting"
      }
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: "Michael",
    email: "michael.jones@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Database maintenance",
        description: "Database maintenance",
        date: "2024-11-03",
        category: "IT"
      },
      {
        active: false,  
        newTask: true,
        completed: true,
        failed: false,
        title: "Write code for module",
        description: "Write code for module",
        date: "2024-10-29",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Bug fixing",
        description: "Bug fixing",
        date: "2024-10-28",
        category: "Development"
      }
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Emily",
    email: "emily.davis@example.com",
    password: "123",
    tasks: [
      {
        active: false, 
        newTask: true,
        completed: false,
        failed: false,
        title: "Update documentation",
        description: "Update documentation",
        date: "2024-10-27",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare team training",
        description: "Prepare team training",
        date: "2024-11-10",
        category: "Training"
      },
      {
        active: false,  
        newTask: true,
        completed: false,
        failed: false,
        title: "Monthly review meeting",
        description: "Monthly review meeting",
        date: "2024-10-31",
        category: "Meeting"
      }
    ],
    taskSummary: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "William",
    email: "william.brown@example.com",
    password: "123",
    tasks: [
      {
        active: false,  
        newTask: true,
        completed: false,
        failed: true,
        title: "Inventory check",
        description: "Inventory check",
        date: "2024-10-26",
        category: "Inventory"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare budget plan",
        description: "Prepare budget plan",
        date: "2024-11-02",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Product quality check",
        description: "Product quality check",
        date: "2024-10-30",
        category: "Quality Assurance"
      }
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];
  const defaultAdmin = [
    {
      "id": 1,
      "firstName": "Admin",
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  export const setLocalStorage = () => {
    if (!localStorage.getItem("employees")) {
      localStorage.setItem("employees", JSON.stringify(defaultEmployees));
    }
   
    if (!localStorage.getItem("admin")) {
      localStorage.setItem("admin", JSON.stringify(defaultAdmin));
    }
  };
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const admin = JSON.parse(localStorage.getItem("admin") || "[]");
    
    return { employees, admin };
  };
 



  