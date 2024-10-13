const mongoose = require('mongoose');
const Location = require('./app_server/models/location'); // Path to your model
const locations = [
    {
      name: 'Apollo Pharma',
      address: '4-106/C, Annojiguda, Hyderabad, Telangana 501301 ',
      rating: 3,
      facilities:['Prescription refills', 'Over-the-counter medications', 'Blood pressure monitoring'],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
        { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: 'Nani Nalli', rating: 5, timestamp: '2013-07-16', reviewText: 'I recently visited Apollo Pharmacy and had a largely positive experience. The store was clean, well-organized, and stocked with a wide range of products, from prescription medications to health supplements. The staff was knowledgeable and helpful, providing detailed information about the medications I needed. Pricing was competitive, with various discounts and a beneficial membership program. While the prescription filling process was smooth and efficient, some items were out of stock, which was a minor inconvenience. Additionally, the online services, including home delivery and prescription uploads, were user-friendly, although tracking could be improved. Overall, Apollo Pharmacy offers reliable service and a pleasant shopping experience, making it a recommended choice for health-related needs.' },
        { author: 'Bala Subhramanyam', rating: 3, timestamp: '2013-06-16', reviewText: 'Convenient location, but the waiting time was a bit long. However, they have a good selection of health products.' }
      ],
      mapUrl : 'https://maps.app.goo.gl/66FYuSkLgsN29DSa8',
      imageSrc : 'https://res.cloudinary.com/dddbzt904/image/upload/v1728577565/Appolo-Annojiguda_c2qjrz.png',
      gmail : 'appolopharamacy56@gmail.com',
      phno: '9177440337'
    },
    {
      name: 'NetMeds',
      address: 'SMART Point, 6/52/1/1, Gr Flr, Annojiguda Vil Ghatkesar, Mandal, Hyderabad, Telangana 501301',
      rating: 4,
      facilities: ['Online prescription ordering', 'Home delivery', 'Immunizations'],
      coords: { lat: 51.456042, lng: -0.970088 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '6:00am', closing: '6:00pm', closed: false },
        { days: 'Saturday', opening: '7:00am', closing: '5:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: '    Shreyansh    ', rating: 4, timestamp: '2013-07-20', reviewText: 'Their online ordering system is easy to use, and delivery is fast. I haven’t had any issues with prescriptions, and their customer service is helpful.'},
        { author: '    Mouli    ', rating: 2, timestamp: '2013-06-25', reviewText: 'Good pharmacy, but sometimes it feels understaffed. The lines can get long during peak hours.' }
      ],
      mapUrl : 'https://maps.app.goo.gl/HDB6ndQCXziphkkN8',
      imageSrc : 'https://images.livemint.com/img/2020/08/20/600x338/263820f4-e231-11ea-8bff-6706f195ca7a_1597890501250_1597890638679.jpg',
      gmail : 'netmedspharma@gmail.com',
      phno: '9177449988'
    },
    {
      name: 'HealthPlus Pharmacy',
      address: 'Kamala Nagar Main Rd, Vikarabad, Telangana ',
      rating: 5,
      facilities: ['Prescription consultation', 'Vaccination services', 'Health screenings'],
      coords: { lat: 51.457042, lng: -0.971088 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '8:00am', closing: '8:00pm', closed: false },
        { days: 'Saturday', opening: '9:00am', closing: '6:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: '   Srinivas    ', rating: 5, timestamp: '2013-08-10', reviewText: 'A great pharmacy with professional staff. I had some questions about a medication, and they explained everything clearly. Highly recommended.' },
        { author: '   Karthikeya   ', rating: 4, timestamp: '2013-08-15', reviewText: 'Quick service and reasonable prices. I always trust this pharmacy for my familys medical needs' }
      ],
      mapUrl : 'https://www.bing.com/maps?osid=6f609c61-5c6e-415f-8818-1153f478ab71&cp=17.476842~78.573661&lvl=17&pi=0&v=2&sV=2&form=S00027',
      imageSrc : 'https://th.bing.com/th/id/OIP.FHGpRTQaE-xbOS9-ieCfGAHaEO?rs=1&pid=ImgDetMain',
      gmail : 'healthplus@gmail.com',
      phno: '91878906798'
    },
    {
      name: 'Wellness Pharmacy',
      address: '162, Korremula Road, OU Colony, Chowdhariguda, Hyderabad, Telangana 500088',
      rating: 4,
      facilities: ['Diabetes care supplies', 'Prescription synchronization', 'Medical equipment rental'],
      coords: { lat: 51.458042, lng: -0.972088 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
        { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: '      Pranay Reddy     ', rating: 4, timestamp: '2013-09-12', reviewText: 'Nice and clean pharmacy. The staff is very polite, and I found everything I needed for my child’s allergies. Will visit again.' },
        { author: '   Koushik reddy      ', rating: 3, timestamp: '2013-09-18', reviewText: 'I like their wellness section. Lots of organic and natural products that are hard to find elsewhere' }
      ],
      mapUrl : 'https://www.bing.com/maps?osid=8d00ad25-25cf-4f90-a20c-c235182fc513&cp=17.355882~78.413029&lvl=16&pi=0&v=2&sV=2&form=S00027',
      imageSrc : 'https://th.bing.com/th/id/R.c3d75704db3073dde136e2e607f43a00?rik=vyo6Ob%2fMDW1iAA&riu=http%3a%2f%2fwww.retail4growth.com%2fpublic%2fuploads%2feditor%2f2022-04-28%2f1651121497.jpg&ehk=FEAScH8aSFJO5aT8CWy1o5gmxlZ%2bgLeuWQjSBXZzbKo%3d&risl=&pid=ImgRaw&r=0',
      gmail : 'wellnesspharmacy@gmail.com',
      phno: '9177499887'
    },
    {
      name: 'Care Pharmacy',
      address: 'Door No 5/123/1, Shop No 2, Boduppal Rd, Peerzadiguda, Buddha Nagar, Hyderabad, Telangana 500039',
      rating: 3,
      facilities: ['Flu shots', 'Medication therapy management', 'Prescription transfers'],
      coords: { lat: 51.459042, lng: -0.973088 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '8:00am', closing: '8:00pm', closed: false },
        { days: 'Saturday', opening: '9:00am', closing: '6:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: '      Akash     ', rating: 3, timestamp: '2013-10-20', reviewText: 'The pharmacist here is very knowledgeable, and they always make sure I understand my medications before I leave. Great customer service!.' },
        { author: '     Tej         ', rating: 4, timestamp: '2013-10-25', reviewText: 'Good prices on over-the-counter products. Sometimes they run out of stock on popular items, though.' }
      ],
      mapUrl : 'https://www.bing.com/maps?osid=1f739ff2-96e6-43fc-9a25-420d84113273&cp=17.432463~78.603251&lvl=16&pi=0&imgid=508a06ac-5ef9-414c-abc4-97566d25947d&v=2&sV=2&form=S00027',
      imageSrc : 'https://th.bing.com/th/id/OLC.jazSIGPbK8oMAw480x360?&rs=1&pid=ImgDetMain',
      gmail : 'carepharma88@gmail.com',
      phno: '9987654328'
    },
    {
      name: 'MedPlus Pharmacy',
      address: '5-5/25/15/173, Balajinagar, Bolligudem, Boduppal(V), Medipally(M), Hyderabad, Malkajgiri, Telangana 500098',
      rating: 4,
      facilities: ['In-home medication delivery', 'Prescription reminders', 'Chronic disease management'],
      coords: { lat: 51.460042, lng: -0.974088 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
        { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: '       Hemanth      ', rating: 4, timestamp: '2013-11-12', reviewText: 'I had a prescription that was hard to fill, but the pharmacist here went the extra mile to find an alternative for me. Super helpful!' },
        { author: '       Abhi         ', rating: 3, timestamp: '2013-11-15', reviewText: 'Conveniently located, but the interior is a bit cramped. They have a good variety of health products, though' }
      ],
      mapUrl : 'https://www.bing.com/maps?osid=bf8c9159-1b0f-42a8-bff2-1c8067a4231c&cp=17.40853~78.598713&lvl=17&pi=0&imgid=479dbf22-15a6-405a-909c-8962d4af43d8&v=2&sV=2&form=S00027',
      imageSrc : 'https://th.bing.com/th/id/OIP.5e8dW8zTQ-kHFFOiAwupVgAAAA?rs=1&pid=ImgDetMain',
      gmail : 'Medpluspharamacy@gmail.com',
      phno: '98906754356'
    },
    {
      name: 'LifePharma',
      address: 'D.No.1 and 2, Nadergul X Roads, Village, Nadargul, Telangana',
      rating: 5,
      facilities: ['Travel vaccinations', 'Health consultations', 'Compounding services'],
      coords: { lat: 51.461042, lng: -0.975088 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '6:30am', closing: '7:00pm', closed: false },
        { days: 'Saturday', opening: '7:30am', closing: '6:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: '     Harsha      ', rating: 5, timestamp: '2013-12-02', reviewText: 'Great experience! The pharmacy is modern and well-stocked, and they have a dedicated area for consultations, which I found really helpful.' },
        { author: '       Shannu      ', rating: 4, timestamp: '2013-12-10', reviewText: ' trust this pharmacy for all my health needs. The staff is very professional, and they offer a wide range of services.' }
      ],
      mapUrl : 'https://www.bing.com/maps?osid=45537439-0b5b-4b80-903f-8cf03cedb23d&cp=17.444542~78.565056&lvl=17&pi=0&v=2&sV=2&form=S00027',
      imageSrc : 'https://www.dubaireview.ae/wp-content/uploads/listing-uploads/gallery/2021/03/15800284_1413217502046166_4357636128890871295_o.jpg',
      gmail : 'lifepharmapharamacy6@gmail.com',
      phno: '9189765437'
    },
    {
      name: 'WellCare Pharmacy',
      address: 'Plot no:977, Survey no:45-50, H No:6-48/3 Besidem Ramraj Cotton Show Room, Peerzadiguda Municipality,',
      rating: 4,
      facilities: ['Prescription delivery', 'Pediatric medications', 'First aid supplies'],
      coords: { lat: 51.462042, lng: -0.976088 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
        { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: '      Deepak       ', rating: 4, timestamp: '2014-01-08', reviewText: 'The pharmacy offers great customer care, and they even deliver my medication. The staff is always friendly and polite.' },
        { author: '       Shiva        ', rating: 3, timestamp: '2014-01-12', reviewText: 'Nice place to get basic health essentials. It’s a small pharmacy, but they offer quick service.' }
      ],
      mapUrl : 'https://www.google.com/maps?q=4-106/C,Annojiguda,Hyderabad,Telangana',
      imageSrc : 'https://th.bing.com/th/id/OIP.lIPF75pAxMpA_-hJh7o-TAAAAA?rs=1&pid=ImgDetMain',
      gmail : 'wellcarepharamacy6@gmail.com',
      phno: '9909876537'
    },
    {
      name: 'CuraPharm',
      address: 'Plot.No.3/1, Shop No.2, 3, 4 Ground Floor, MMJ Complex, Hyderabad Road',
      rating: 3,
      facilities: ['Specialty medications', 'Medical supplies', 'Medication adherence programs'],
      coords: { lat: 51.463042, lng: -0.977088 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '8:00am', closing: '6:00pm', closed: false },
        { days: 'Saturday', opening: '9:00am', closing: '5:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: '          Akhil       ', rating: 3, timestamp: '2014-02-10', reviewText: 'I’ve been coming here for years. The pharmacists know me by name and always provide excellent advice on my prescriptions.' },
        { author: '       Rishi          ', rating: 4, timestamp: '2014-02-15', reviewText: 'A hidden gem! They carry a wide range of supplements and natural remedies, and the staff is very knowledgeable.' }
      ],
      mapUrl : 'https://www.google.com/maps?q=4-106/C,Annojiguda,Hyderabad,Telangana',
      imageSrc : 'https://th.bing.com/th/id/OIP.KsPFMWKHQxWkCFvgRGshGAHaEQ?w=291&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
      gmail : 'curepharma56@gmail.com',
      phno: '9178990087'
    }

  ]
  
  
mongoose.connect('mongodb+srv://nanibabunalli:123456au@cluster0.yzl5k.mongodb.net/Pharma-locater', { useNewUrlParser: true, useUnifiedTopology: true })
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
