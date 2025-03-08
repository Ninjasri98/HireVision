import React from 'react'
import { Doc } from '../../convex/_generated/dataModel'
import useMeetingActions from '@/hooks/useMeetingActions'
import { getMeetingStatus } from '@/lib/utils';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CalendarIcon } from 'lucide-react';

type Interview = Doc<"interviews">
function MeetingCard({interview} : {interview : Interview}) {
    const {joinMeeting} = useMeetingActions();

    const status = getMeetingStatus(interview);
    const formattedDate = format(new Date(interview.startTime), "EEEE, MMMM d · h:mm a");
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            {formattedDate}
          </div>

          <Badge
            variant={
              status === "live" ? "default" : status === "upcoming" ? "secondary" : "outline"
            }
          >
            {status === "live" ? "Live Now" : status === "upcoming" ? "Upcoming" : "Completed"}
          </Badge>
        </div>

        <CardTitle>{interview.title}</CardTitle>

        {interview.description && (
          <CardDescription className="line-clamp-2">{interview.description}</CardDescription>
        )}
      </CardHeader>

      <CardContent>
        {status === "live" && (
          <Button className="w-full" onClick={() => joinMeeting(interview.streamCallId)}>
            Join Meeting
          </Button>
        )}

        {status === "upcoming" && (
          <Button variant="outline" className="w-full" disabled>
            Waiting to Start
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export default MeetingCard