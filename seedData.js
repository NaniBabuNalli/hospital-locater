const mongoose = require('mongoose');
const Location = require('./app_server/models/location'); // Path to your model
const locations = [
  {
    name: 'City Health Hospital',
    address: '4-106/C, Annojiguda, Hyderabad, Telangana 501301',
    rating: 3,
    facilities: ['Emergency care', 'Surgery', 'Pharmacy'],
    coords: { lat: 51.455041, lng: -0.9690884 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '24/7', closed: false }
    ],
    imageSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUW5UiS-v8sda36VVD0u4IuFGiITezljsMg&s',
    reviews: [
      { author: 'Nani Nalli', rating: 5, timestamp: '2013-07-16', reviewText: 'I recently visited City Health Hospital and had a largely positive experience. The hospital was clean and well-organized.' },
      { author: 'Bala Subhramanyam', rating: 3, timestamp: '2013-06-16', reviewText: 'Convenient location, but the waiting time was a bit long.' }
    ]
  },
  {
    name: 'Metro Medical Centre',
    address: '3-99/1, Chengicherla Road, Beside Mahadev Jewellers, Chengicherla, Hyderabad, Telangana 500092',
    rating: 4,
    facilities: ['Outpatient services', 'Diagnostics', 'Immunizations'],
    coords: { lat: 51.456042, lng: -0.970088 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '24/7', closed: false }
    ],
    imageSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88AMyEnjMHycJ8c3ulNKUWkwJlxgBzBHiNg&s',
    reviews: [
      { author: 'Shreyansh', rating: 4, timestamp: '2013-07-20', reviewText: 'Great services and quick response times!' },
      { author: 'Mouli', rating: 2, timestamp: '2013-06-25', reviewText: 'Good hospital, but sometimes feels understaffed during peak hours.' }
    ]
  },
  {
    name: 'HealthFirst Hospital',
    address: 'Kamala Nagar Main Rd, Vikarabad, Telangana',
    rating: 5,
    facilities: ['Emergency care', 'Vaccination services', 'Health screenings'],
    coords: { lat: 51.457042, lng: -0.971088 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '24/7', closed: false }
    ],
    imageSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Ds32x9Y2tAWeur8i422IlgskLJjUhxMoxQ&s',
    reviews: [
      { author: 'Srinivas', rating: 5, timestamp: '2013-08-10', reviewText: 'A great hospital with professional staff.' },
      { author: 'Karthikeya', rating: 4, timestamp: '2013-08-15', reviewText: 'Quick service and reasonable prices for treatments.' }
    ]
  },
  {
    name: 'CarePlus Hospital',
    address: '162, Korremula Road, OU Colony, Chowdhariguda, Hyderabad, Telangana 500088',
    rating: 4,
    facilities: ['Chronic disease management', 'Surgery', 'Medical equipment rental'],
    coords: { lat: 51.458042, lng: -0.972088 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '24/7', closed: false }
    ],
    imageSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdTGovjxaZWbC0G7NXQ8hl379ec_rYuDQwNA&s',
    reviews: [
      { author: 'Pranay Reddy', rating: 4, timestamp: '2013-09-12', reviewText: 'Nice and clean hospital. The staff is very polite.' },
      { author: 'Koushik Reddy', rating: 3, timestamp: '2013-09-18', reviewText: 'Good healthcare options, but a bit crowded.' }
    ]
  },
  {
    name: 'PrimeCare Hospital',
    address: 'Door No 5/123/1, Shop No 2, Boduppal Rd, Peerzadiguda, Buddha Nagar, Hyderabad, Telangana 500039',
    rating: 3,
    facilities: ['Emergency services', 'Medication therapy management', 'Patient transfers'],
    coords: { lat: 51.459042, lng: -0.973088 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '24/7', closed: false }
    ],
    imageSrc : 'https://images1-fabric.practo.com/practices/1138452/primecare-hospital-bangalore-5a30d6a8801a6.jpg',
    reviews: [
      { author: 'Akash', rating: 3, timestamp: '2013-10-20', reviewText: 'The staff is very knowledgeable and caring.' },
      { author: 'Tej', rating: 4, timestamp: '2013-10-25', reviewText: 'Good prices on treatments. Sometimes they run out of stock on popular items.' }
    ]
  },
  {
    name: 'Community Care Hospital',
    address: 'D.No.1 and 2, Nadergul X Roads, Village, Nadargul, Telangana',
    rating: 5,
    facilities: ['Travel vaccinations', 'Health consultations', 'Compounding services'],
    coords: { lat: 51.461042, lng: -0.975088 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '24/7', closed: false }
    ],
    imageSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpl9NXT2DwDO9KfNxjlxTW8bOA47irsMJ0A&s',
    reviews: [
      { author: 'Harsha', rating: 5, timestamp: '2013-12-02', reviewText: 'Great experience! The hospital is modern and well-equipped.' },
      { author: 'Shannu', rating: 4, timestamp: '2013-12-10', reviewText: 'I trust this hospital for all my health needs.' }
    ]
  }
];

  
mongoose.connect('mongodb://localhost:27017/hms', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return Location.insertMany(locations);
  })
  .then(() => {
    console.log('Data successfully inserted!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting data:', err);
  });
