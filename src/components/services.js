import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ServiceIcon1 from '@mui/icons-material/AccessibilityNew';
import ServiceIcon2 from '@mui/icons-material/Extension';
import ServiceIcon3 from '@mui/icons-material/Settings';
import arrowrightupdateImage from '../images/arrowrightupdate.png';
import arrowleftupdateImage from '../images/arrowleftupdate.png';
import usabilityupdateImage from '../images/usabilityupdate.png';
import accessibilityImage from '../images/accessibility.png';
import enhancementImage from '../images/enhancement.png';

const Services = () => {
  return (
    <Box
      sx={{
        width: '94%',
        padding: '50px',
        height: '245vh',
        background: 'linear-gradient(to bottom, #304352, #d7d2cc)',
        color: 'white',
      }}
    >
      <Typography variant='h4' fontWeight={700} fontFamily='Roboto'>
        Our Services
      </Typography>

      {/* Cards layout for services */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '30px',
        }}
      >
        {/* Service Card 1 */}
        <Card
          sx={{
            width: '30%',
            borderRadius: '16px',
            height: '30vh',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease-in-out', // CSS transition for the transform property
            '&:hover': {
              transform: 'translateY(-10px)', // Move the card upward on hover
            },
          }}
        >
          <CardContent>
            <IconButton size='large'>
              <ServiceIcon1 fontSize='inherit' />
            </IconButton>
            <Typography variant='h6' fontWeight={700} mb={2}>
              Service 1
            </Typography>
            <Typography variant='body1'>Usability Score Analysis</Typography>
          </CardContent>
        </Card>

        {/* Service Card 2 */}
        <Card
          sx={{
            width: '30%',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-10px)',
            },
          }}
        >
          <CardContent>
            <IconButton size='large'>
              <ServiceIcon2 fontSize='inherit' />
            </IconButton>
            <Typography variant='h6' fontWeight={700} mb={2}>
              Service 2
            </Typography>
            <Typography variant='body1'>
              Accessibility Score Analysis
            </Typography>
          </CardContent>
        </Card>

        {/* Service Card 3 */}
        <Card
          sx={{
            width: '30%',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-10px)',
            },
          }}
        >
          <CardContent>
            <IconButton size='large'>
              <ServiceIcon3 fontSize='inherit' />
            </IconButton>
            <Typography variant='h6' fontWeight={700} mb={2}>
              Service 3
            </Typography>
            <Typography variant='body1'>
              Design Enhancement Recommendations
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <img
        src={arrowrightupdateImage}
        alt='arrowright Image'
        style={{
          width: '25%',
          top: '-3%',
          left: '-7%',
          height: 'auto',
          borderRadius: '8px',
          zIndex: 2,
          position: 'relative',
        }}
      />

      <img
        src={usabilityupdateImage}
        alt='usabilityupdate Image'
        style={{
          width: '25%',
          top: '10%',
          left: '20%',
          height: 'auto',
          borderRadius: '8px',
          zIndex: 2,
          position: 'relative',
        }}
      />

      {/* Left-aligned text next to the last image */}
      <Typography
        variant='body1'
        style={{
          position: 'relative',
          top: '-3%',
          left: '15%',
          width: '25%',
        }}
      >
        Service: Elevate user experience through in-depth interface evaluations.
        Benefits: Uncover user pain points, enhance interaction design, and
        refine your digital products. Outcome: Improved satisfaction and
        engagement among your audience.
      </Typography>

      <img
        src={arrowleftupdateImage}
        alt='arrowright Image'
        style={{
          width: '25%',
          top: '-5%',
          left: '25%',
          height: 'auto',
          borderRadius: '8px',
          zIndex: 2,
          position: 'relative',
        }}
      />

      <img
        src={accessibilityImage}
        alt='accessibility Image'
        style={{
          width: '25%',
          top: '7%',
          left: '-35%',
          height: 'auto',
          borderRadius: '8px',
          zIndex: 2,
          position: 'relative',
        }}
      />

      {/* Left-aligned text next to the last image */}
      <Typography
        variant='body1'
        style={{
          position: 'relative',
          top: '-5%',
          left: '68%',
          width: '30%',
        }}
      >
        Service: Ensure inclusivity with comprehensive accessibility
        assessments. Benefits: Identify and address potential barriers, ensuring
        your content is accessible to all users. Outcome: Foster a more
        inclusive online environment.
      </Typography>
      <img
        src={arrowrightupdateImage}
        alt='arrowright Image'
        style={{
          width: '25%',
          top: '-8%',
          left: '19%',
          height: 'auto',
          borderRadius: '8px',
          zIndex: 2,
          position: 'relative',
        }}
      />

      <img
        src={enhancementImage}
        alt='enhancement Image'
        style={{
          width: '35%',
          top: '4%',
          left: '22%',
          height: 'auto',
          borderRadius: '8px',
          zIndex: 2,
          position: 'relative',
        }}
      />

      {/* Left-aligned text next to the last image */}
      <Typography
        variant='body1'
        style={{
          position: 'relative',
          top: '-10%',
          left: '12%',
          width: '30%',
        }}
      >
        Service: Transform your digital presence with personalized design
        recommendations. Benefits: Receive expert insights on enhancing visual
        appeal and user engagement. Identify and rectify design elements that
        may impact user experience. Stay ahead in the competitive landscape with
        cutting-edge design suggestions. Outcome: Elevate your brand image and
        user satisfaction through a visually stunning and user-friendly
        interface.
      </Typography>
    </Box>
  );
};

export default Services;
