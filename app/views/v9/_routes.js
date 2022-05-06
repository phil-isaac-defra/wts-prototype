const express = require('express')
const router = express.Router()




router.get('*', function(req, res, next){
  res.locals['serviceName'] = 'Move and track waste'
  next()
});




router.get('/index', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})




// Option 1 - As per V8 in Figma, but only using task list__tag


router.get('/new-new', function (req, res) {

  req.session.data['win_type'] = 'new'

  // Set up all the section statuses

    // Cannot start yet = 'govuk-tag--grey'
    // Not started = 'govuk-tag--grey'
    // In progress = 'govuk-tag--blue'
    // Completed = ''

  req.session.data['total_sections'] = '10'
  req.session.data['completed_sections'] = '0'

  req.session.data['producer_info_status'] = 'Review'
  req.session.data['producer_info_status_class'] = 'govuk-tag--blue'

  req.session.data['sic_info'] = '41201 Construction of commercial buildings'

  req.session.data['pick_up_status'] = 'Not started'
  req.session.data['pick_up_status_class'] = 'govuk-tag--grey'

  req.session.data['carrier_contact_status'] = 'Not started'
  req.session.data['carrier_contact_status_class'] = 'govuk-tag--grey'

  req.session.data['receiver_contact_status'] = 'Not started'
  req.session.data['receiver_contact_status_class'] = 'govuk-tag--grey'

  req.session.data['transportation_info_status'] = 'Not started'
  req.session.data['transportation_info_status_class'] = 'govuk-tag--grey'

  req.session.data['waste_status'] = 'Not started'
  req.session.data['waste_status_class'] = 'govuk-tag--grey'

  req.session.data['hazard_status'] = 'Not started'
  req.session.data['hazard_status_class'] = 'govuk-tag--grey'

  req.session.data['waste_stored_status'] = 'Not started'
  req.session.data['waste_stored_status_class'] = 'govuk-tag--grey'

  req.session.data['waste_management_status'] = 'Not started'
  req.session.data['waste_management_status_class'] = 'govuk-tag--grey'

  req.session.data['payment_status'] = 'Cannot start yet'
  req.session.data['payment_status_class'] = 'govuk-tag--grey'

  res.redirect('new');

});


router.get('/new', function (req, res) {

    var count = 0;

    if(req.session.data['producer_info_status'] == "Completed"){
			count++;
		}

    if(req.session.data['pick_up_status'] == "Completed"){
			count++;
		}

    if(req.session.data['carrier_contact_status'] == "Completed"){
			count++;
		}

    if(req.session.data['receiver_contact_status'] == "Completed"){
			count++;
		}

    if(req.session.data['transportation_info_status'] == "Completed"){
			count++;
		}

    if(req.session.data['waste_status'] == "Completed"){
			count++;
		}

    if(req.session.data['hazard_status'] == "Completed"){
			count++;
		}

    if(req.session.data['waste_stored_status'] == "Completed"){
			count++;
		}

    if(req.session.data['waste_management_status'] == "Completed"){
			count++;
		}

    if(req.session.data['payment_status'] == "Completed"){
			count++;
		}

    res.render( './' + req.originalUrl, {

      'completed_sections' : count

  })
})





// Option 2 - Grouping tasks into total_sections


router.get('/new-win', function (req, res) {

  req.session.data['win_type'] = 'win'

  req.session.data['cover_note'] = 'true'

  req.session.data['total_sections'] = '10'
  req.session.data['completed_sections'] = '0'

  // Set up all the section statuses

    // Cannot start yet = 'govuk-tag--grey'
    // Not started = 'govuk-tag--grey'
    // In progress = 'govuk-tag--blue'
    // Completed = ''

  req.session.data['producer_info_status'] = 'Review'
  req.session.data['producer_info_status_class'] = 'govuk-tag--blue'

  req.session.data['sic_info'] = '41201 Construction of commercial buildings'

  req.session.data['pick_up_status'] = 'Not started'
  req.session.data['pick_up_status_class'] = 'govuk-tag--grey'

  req.session.data['carrier_contact_status'] = 'Not started'
  req.session.data['carrier_contact_status_class'] = 'govuk-tag--grey'

  req.session.data['receiver_contact_status'] = 'Not started'
  req.session.data['receiver_contact_status_class'] = 'govuk-tag--grey'

  req.session.data['transportation_info_status'] = 'Not started'
  req.session.data['transportation_info_status_class'] = 'govuk-tag--grey'

  req.session.data['waste_status'] = 'Not started'
  req.session.data['waste_status_class'] = 'govuk-tag--grey'

  req.session.data['hazard_status'] = 'Not started'
  req.session.data['hazard_status_class'] = 'govuk-tag--grey'

  req.session.data['waste_stored_status'] = 'Not started'
  req.session.data['waste_stored_status_class'] = 'govuk-tag--grey'

  req.session.data['waste_management_status'] = 'Not started'
  req.session.data['waste_management_status_class'] = 'govuk-tag--grey'

  req.session.data['payment_status'] = 'Cannot start yet'
  req.session.data['payment_status_class'] = 'govuk-tag--grey'


  res.redirect('win');

})




router.get('/win', function (req, res) {

  var count = 0;

  if(req.session.data['producer_info_status'] == "Completed"){
    count++;
  }

  if(req.session.data['pick_up_status'] == "Completed"){
    count++;
  }

  if(req.session.data['carrier_contact_status'] == "Completed"){
    count++;
  }

  if(req.session.data['receiver_contact_status'] == "Completed"){
    count++;
  }

  if(req.session.data['transportation_info_status'] == "Completed"){
    count++;
  }

  if(req.session.data['waste_status'] == "Completed"){
    count++;
  }

  if(req.session.data['hazard_status'] == "Completed"){
    count++;
  }

  if(req.session.data['waste_stored_status'] == "Completed"){
    count++;
  }

  if(req.session.data['waste_management_status'] == "Completed"){
    count++;
  }

  if(req.session.data['payment_status'] == "Completed"){
    count++;
  }

  res.render( './' + req.originalUrl, {

    'completed_sections' : count

  })

})



// Producer information

router.get('/producer', function (req, res) {

  sic_code = req.session.data['sic_info'].slice(0,5)

  sic_description = req.session.data['sic_info'].slice(5)

  res.render( './' + req.originalUrl, {

    'sic_code' : sic_code,
    'sic_description' : sic_description

  } )
})

router.post('/producer', function(req, res) {
  req.session.data['producer_info_status'] = "Completed";
  req.session.data['producer_info_status_class'] = "";
  res.redirect( req.session.data['win_type'] );
})



// Pick up information

router.get('/pick-up', function (req, res) {
  // req.session.data['pick_up_status'] = "In progress";
  // req.session.data['pick_up_status_class'] = "govuk-tag--blue";
  res.render( './' + req.originalUrl, {} )
})

router.post('/pick-up', function(req, res) {
  req.session.data['pick_up_status'] = "Completed";
  req.session.data['pick_up_status_class'] = "";
  res.redirect( req.session.data['win_type'] );
})



// Carrier contact information

router.get('/carrier-contact', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/carrier-contact', function(req, res) {
  req.session.data['carrier_contact_status'] = "Completed";
  req.session.data['carrier_contact_status_class'] = "";
  res.redirect( req.session.data['win_type'] );
})



// Receiver contact information

router.get('/receiver-contact', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/receiver-contact', function(req, res) {
  req.session.data['receiver_contact_status'] = "Completed";
  req.session.data['receiver_contact_status_class'] = "";
  res.redirect( req.session.data['win_type'] );
})



// Transportation information

router.get('/transportation', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/transportation', function(req, res) {
  req.session.data['transportation_info_status'] = "Completed";
  req.session.data['transportation_info_status_class'] = "";
  res.redirect( req.session.data['win_type'] );
})



// Waste information

router.get('/waste', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/waste', function(req, res) {
  req.session.data['waste_status'] = "Completed";
  req.session.data['waste_status_class'] = "";
  res.redirect( req.session.data['win_type'] );
})



// hazard information

router.get('/hazard', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/hazard', function(req, res) {
  req.session.data['hazard_status'] = "Completed";
  req.session.data['hazard_status_class'] = "";
  res.redirect( req.session.data['win_type'] );
})



// Waste stored information

router.get('/waste-storage', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/waste-storage', function(req, res) {
  req.session.data['waste_stored_status'] = "Completed";
  req.session.data['waste_stored_status_class'] = "";
  res.redirect( req.session.data['win_type'] );
})



// Waste management information

router.get('/waste-management', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/waste-management', function(req, res) {
  req.session.data['waste_management_status'] = "Completed";
  req.session.data['waste_management_status_class'] = "";
  res.redirect( req.session.data['win_type'] );
})



// SIC code

router.get('/sic-code', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/sic-code', function(req, res) {
  res.redirect( 'producer' );
})







module.exports = router;