import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import useStyles from './PageUseStyles';

const AboutPage = () => {
  const classes = useStyles();
  return (
    <>
      <BreadcrumbsItem to='/About'>Qui-sommes-nous?</BreadcrumbsItem>
      <Box className={classes.mainContainer} variant="body1">
        <Typography variant="h1" component="h1">
          Qui-sommes-nous ?
        </Typography>
        <Typography variant="h2" component="h2">
          Lorem ipsum
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante quam, aliquet eu ultricies ac, lobortis sed tortor. Integer et suscipit orci. Ut auctor, purus in porttitor varius, urna lorem placerat neque, eget efficitur augue magna id erat. Sed consectetur interdum velit quis laoreet. Vestibulum lectus elit, bibendum eu nisl a, mollis consequat nisi. Sed in turpis rutrum, consequat tellus mattis, dapibus risus. Aenean consequat, odio non imperdiet euismod, dui leo cursus odio, non posuere turpis purus non diam.
        </Typography>
        <Typography variant="h2" component="h2">
          Vivamus a risus posuere
        </Typography>
        <Typography variant="body1">
          Vivamus a risus posuere, molestie sapien pellentesque, eleifend quam. Donec eget interdum elit. Duis urna nunc, faucibus in volutpat vel, efficitur id orci. Sed vitae accumsan sapien. Nulla mattis vulputate justo, vitae dictum velit accumsan eu. Vestibulum tempus tempus tempus. Fusce nec feugiat nisi.
        </Typography>
        <Typography variant="body1">
          Proin suscipit laoreet dignissim. Sed metus sem, ultricies ac auctor nec, luctus eu diam. Nullam eget convallis sem. Donec diam nunc, malesuada ac risus pharetra, fringilla tincidunt mi. Nam semper dapibus felis eu facilisis. Suspendisse viverra vulputate odio, sit amet iaculis justo suscipit ac. Donec ut enim dictum, aliquet ligula in, commodo massa. Mauris pulvinar elit pulvinar egestas lobortis. Sed a fringilla magna. Proin bibendum erat vel nibh cursus, iaculis mollis urna lacinia. Quisque tincidunt ac purus a suscipit. Pellentesque dui velit, feugiat vel posuere vitae, mollis at lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eu sapien erat. Nunc consectetur eros vel tortor venenatis, non pulvinar nulla vulputate.
        </Typography>
      </Box>
    </>
  )
}

export default AboutPage;