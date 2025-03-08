"use client";
import { useMutation, useQuery } from 'convex/react';
import React from 'react'
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';
import toast from 'react-hot-toast';
import LoaderUI from '@/components/LoaderUI';
import { groupInterviews } from '@/lib/utils';


function DashboardPage() {
  const users = useQuery(api.users.getUsers)
  const interviews = useQuery(api.interviews.getAllInterviews)
  const updateStatus = useMutation(api.interviews.updateInterviewStatus)

  const handleStatusUpdate = async (InterviewId : Id<"interviews"> , status : string ) =>{
    try {
      await updateStatus({id:InterviewId,status})
      toast.success(`Interview marked as ${status}`)
    } catch (error) {
      toast.error("Failed to update status")
    }
  }

  if (!interviews || !users) return <LoaderUI/>

  const groupedInterviews = groupInterviews(interviews);

  
  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage