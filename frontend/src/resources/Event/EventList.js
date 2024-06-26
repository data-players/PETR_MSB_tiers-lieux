import React from 'react';
import { Avatar } from '@material-ui/core';
import { SimpleList } from 'react-admin';
import { MultiViewsList } from '@semapps/list-components';
import ListIcon from '@material-ui/icons/List';
import EventFilterSidebar from './EventFilterSidebar';
import { CalendarList } from '@semapps/date-components';
import frLocale from '@fullcalendar/core/locales/fr';
import EventIcon from '@material-ui/icons/Event';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { ListActionsWithPermissions } from '@semapps/auth-provider'

const isIframe = window !== window.top;

const EventList = props => (
  <>
    {isIframe ? null : <BreadcrumbsItem to='/Event'>Agenda</BreadcrumbsItem>}
    <MultiViewsList
      aside={<EventFilterSidebar />}
      actions={<ListActionsWithPermissions exporter={false} />}
      views={{
        calendar: {
          label: 'Calendrier',
          icon: EventIcon,
          perPage: 1000,
          pagination: false,
          list: (
            <CalendarList
              locale={frLocale}
              label="pair:label"
              startDate="pair:startDate"
              endDate="pair:endDate"
              linkType="show"
            />
          )
        },
        list: {
          label: 'Liste',
          icon: ListIcon,
          sort: { field: 'pair:label', order: 'DESC' },
          perPage: 25,
          list: (
            <SimpleList
              primaryText={record => record['pair:label']}
              secondaryText={record => record['pair:comment']}
              leftAvatar={record => (
                <Avatar src={record['pair:depictedBy']} width="100%">
                  <EventIcon />
                </Avatar>)}
              linkType="show"
            />
          )
        }
      }}
      {...props}
    />
  </>
);


export default EventList;
