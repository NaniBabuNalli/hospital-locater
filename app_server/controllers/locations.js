const Location = require('../models/location'); // Import the model

// Home page listing locations
const homelist = async (req, res) => {
  try {
    const locations = await Location.find(); // No callback, using await
    res.render('locations-list', {
      title: 'PharmaLoc8r - Find Your Nearest Pharmacy, Anytime, Anywhere',
      pageHeader: {
        title: 'PharmaLoc8r',
        strapline: 'Find Your Nearest Pharmacy, Anytime, Anywhere',
      },
      sidebar: "Searching for a pharmacy with great facilities? Our Pharmacy Locator helps you find the best spots for all your pharmaceutical needs...",
      locations: locations // Use data from MongoDB
    });
  } catch (err) {
    res.status(500).send('Error retrieving locations');
  }
};
// Location detail page
const locationInfo = async (req, res) => {
  const locationName = req.params.name.replace(/-/g, ' ');
  try {
    const location = await Location.findOne({ name: new RegExp(`^${locationName}$`, 'i') });
    if (!location) {
      return res.status(404).send('Location not found');
    }
    res.render('location-info', {
      title: location.name,
      pageHeader: { title: location.name },
      sidebar: {
        context: `${location.name} is featured on Pharmacy Locator because it offers excellent healthcare services and customer care.`,
        callToAction: `To Contact Us:\nGmail: ${location.gmail}\nPhone: ${location.phno}`
      },
      location: location
    });
  } catch (err) {
    res.status(500).send('Error retrieving location');
  }
};

// Add Review Page
const addReview = (req, res) => {
  const locationName = req.params.name.replace(/-/g, ' '); // Get the location name from the URL
  Location.findOne({ name: new RegExp(`^${locationName}$`, 'i') }, (err, location) => { // Find location by name
    if (err || !location) {
      return res.status(404).send('Location not found'); // Handle location not found
    }

    // Render the add review page
    res.render('location-review-form', {
      title: `Add Review for ${location.name}`,
      pageHeader: { title: `Review ${location.name}` },
      location: location // Pass the location to the view for context
    });
  });
};

// Exporting all the controller functions
module.exports = {
  homelist,
  locationInfo,
  addReview
};
