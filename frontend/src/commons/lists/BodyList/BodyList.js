import React from 'react';
import { useTranslate, getFieldLabelTranslationArgs, useShowContext } from 'react-admin';
import { Grid, Hidden, makeStyles } from '@material-ui/core';
import BodyLabel from './BodyLabel';
import FullWidthBox from '../../FullWidthBox';
import LargeContainer from '../../LargeContainer';
import SubAppBar from './SubAppBar';

const useStyles = makeStyles((theme) => ({
  divider: {
    paddingTop: 5,
    paddingBottom: 20,
    borderBottom: '1px lightgrey solid',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
}));

const BodyList = ({ children, aside, alert }) => {
  const translate = useTranslate();
  const classes = useStyles();
  const { basePath, loaded, record, resource } = useShowContext();
  if (!loaded) return null;

  const fields = React.Children.toArray(children).filter(
    (field) => field && record[field.props.source] && React.isValidElement(field)
  );

  return (
    <>
      <SubAppBar fields={fields} />
      <FullWidthBox>
        <LargeContainer>
          <Grid container spacing={2}>
            <Grid item sm={9} xs={12}>
              {alert && React.cloneElement(alert)}
              {fields.map((field) => (
                <div key={field.props.source} id={field.props.source} className={classes.divider}>
                  {field.props.addLabel ? (
                    <>
                      <BodyLabel>
                        {translate(
                          ...getFieldLabelTranslationArgs({
                            label: field.props.label,
                            resource,
                            source: field.props.source,
                          })
                        )}
                      </BodyLabel>
                      {React.cloneElement(field, {
                        record,
                        resource,
                        basePath,
                      })}
                    </>
                  ) : typeof field.type === 'string' ? (
                    field
                  ) : (
                    React.cloneElement(field, {
                      record,
                      resource,
                      basePath,
                    })
                  )}
                </div>
              ))}
            </Grid>
            <Hidden xsDown>
              <Grid item sm={3}>
                {aside}
              </Grid>
            </Hidden>
          </Grid>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default BodyList;
