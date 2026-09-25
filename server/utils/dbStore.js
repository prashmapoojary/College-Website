const mongoose = require('mongoose');

// In-memory fallback repository for graceful offline/disconnected mode
const memoryStore = {
  faculty: [
    {
      _id: 'fac_1',
      name: 'Dr. Vanitha',
      department: 'Dept of ComputerScience',
      email: 'vanitha@mgmudupi.ac.in',
      contact: '9845123456',
      qualification: 'M.Sc., Ph.D.',
      joiningDate: new Date('2010-06-15'),
      photo: '',
      resume: '',
      createdAt: new Date(),
    },
    {
      _id: 'fac_2',
      name: 'Dr. Devidas',
      department: 'Dept of Physics',
      email: 'devidas@mgmudupi.ac.in',
      contact: '9845654321',
      qualification: 'M.Sc., Ph.D.',
      joiningDate: new Date('2012-08-20'),
      photo: '',
      resume: '',
      createdAt: new Date(),
    },
    {
      _id: 'fac_3',
      name: 'Prof. Ramesh',
      department: 'Dept of Commerce',
      email: 'ramesh@mgmudupi.ac.in',
      contact: '9741234567',
      qualification: 'M.Com, M.Phil',
      joiningDate: new Date('2015-01-10'),
      photo: '',
      resume: '',
      createdAt: new Date(),
    }
  ],
  departments: [
    { _id: 'dept_1', name: 'Dept of ComputerScience', code: 'CS', headOfDepartment: 'Dr. Vanitha' },
    { _id: 'dept_2', name: 'Dept of Commerce', code: 'COM', headOfDepartment: 'Prof. Ramesh' },
    { _id: 'dept_3', name: 'Dept. of Physics', code: 'PHY', headOfDepartment: 'Dr. Devidas' },
    { _id: 'dept_4', name: 'Dept. of Chemistry', code: 'CHEM', headOfDepartment: 'Dr. Suresh' },
    { _id: 'dept_5', name: 'Dept. of Mathematics', code: 'MATH', headOfDepartment: 'Prof. Anitha' },
    { _id: 'dept_6', name: 'Dept. of Botany', code: 'BOT', headOfDepartment: 'Dr. Smitha' },
    { _id: 'dept_7', name: 'Dept. of Zoology', code: 'ZOO', headOfDepartment: 'Dr. Raghavendra' },
    { _id: 'dept_8', name: 'Dept. of English', code: 'ENG', headOfDepartment: 'Prof. Shailaja' },
    { _id: 'dept_9', name: 'Dept. of Journalism', code: 'JRN', headOfDepartment: 'Dr. Manjunath' },
    { _id: 'dept_10', name: 'Dept. of Economics', code: 'ECO', headOfDepartment: 'Prof. Kamath' },
  ],
  alumni: [],
  applications: [],
  grievances: [],
  suggestions: [],
  student_feedback: [],
  staff_feedback: [],
  employers_feedback: [],
  parents_feedback: [],
  admins: []
};

function isDbConnected() {
  return mongoose.connection && mongoose.connection.readyState === 1;
}

// Universal collection handler that uses MongoDB when online or memoryStore when offline
const getCollectionHandler = (collectionName, Model) => {
  return {
    find: async (query = {}, sort = { createdAt: -1 }) => {
      if (isDbConnected() && Model) {
        try {
          return await Model.find(query).sort(sort).lean();
        } catch (err) {
          console.warn(`[DBStore] DB Query failed on ${collectionName}, falling back to memory store:`, err.message);
        }
      }
      let items = memoryStore[collectionName] || [];
      if (Object.keys(query).length > 0) {
        items = items.filter(item => {
          return Object.entries(query).every(([k, v]) => item[k] === v);
        });
      }
      return [...items].reverse();
    },

    findById: async (id) => {
      if (isDbConnected() && Model && mongoose.Types.ObjectId.isValid(id)) {
        try {
          const doc = await Model.findById(id).lean();
          if (doc) return doc;
        } catch (err) {
          console.warn(`[DBStore] DB findById failed on ${collectionName}:`, err.message);
        }
      }
      const items = memoryStore[collectionName] || [];
      return items.find(item => String(item._id || item.id) === String(id)) || null;
    },

    create: async (data) => {
      const now = new Date();
      if (isDbConnected() && Model) {
        try {
          const doc = new Model(data);
          const saved = await doc.save();
          return saved.toObject();
        } catch (err) {
          console.warn(`[DBStore] DB create failed on ${collectionName}, saving to memory store:`, err.message);
        }
      }
      if (!memoryStore[collectionName]) memoryStore[collectionName] = [];
      const item = {
        _id: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        ...data,
        createdAt: now,
        updatedAt: now,
      };
      memoryStore[collectionName].push(item);
      return item;
    },

    findByIdAndUpdate: async (id, data) => {
      if (isDbConnected() && Model && mongoose.Types.ObjectId.isValid(id)) {
        try {
          const doc = await Model.findByIdAndUpdate(id, data, { new: true }).lean();
          if (doc) return doc;
        } catch (err) {
          console.warn(`[DBStore] DB update failed on ${collectionName}:`, err.message);
        }
      }
      if (!memoryStore[collectionName]) memoryStore[collectionName] = [];
      const idx = memoryStore[collectionName].findIndex(item => String(item._id || item.id) === String(id));
      if (idx !== -1) {
        memoryStore[collectionName][idx] = {
          ...memoryStore[collectionName][idx],
          ...data,
          updatedAt: new Date()
        };
        return memoryStore[collectionName][idx];
      }
      return null;
    },

    findByIdAndDelete: async (id) => {
      if (isDbConnected() && Model && mongoose.Types.ObjectId.isValid(id)) {
        try {
          await Model.findByIdAndDelete(id);
        } catch (err) {
          console.warn(`[DBStore] DB delete failed on ${collectionName}:`, err.message);
        }
      }
      if (!memoryStore[collectionName]) memoryStore[collectionName] = [];
      memoryStore[collectionName] = memoryStore[collectionName].filter(item => String(item._id || item.id) !== String(id));
      return { success: true, message: 'Record deleted' };
    }
  };
};

module.exports = {
  isDbConnected,
  memoryStore,
  getCollectionHandler,
};
