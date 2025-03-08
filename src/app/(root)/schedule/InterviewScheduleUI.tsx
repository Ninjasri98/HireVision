import { useUser } from '@clerk/nextjs'
import { useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useMutation, useQuery } from 'convex/react'
import React, { useState } from 'react'
import { api } from '../../../../convex/_generated/api'
import toast from 'react-hot-toast'

function InterviewScheduleUI() {
    const client = useStreamVideoClient()
    const {user} = useUser()
    const [open, setOpen] = useState(false)
    const [isCreating, setIsCreating] = useState(false)

    const interviews = useQuery(api.interviews.getAllInterviews) ?? []
    const users = useQuery(api.users.getUsers) ?? []
    const createInterview = useMutation(api.interviews.createInterview)

    const interviewers = users?.filter((u)=> u.role === "interviewer")
    const candidates = users?.filter((u)=> u.role === "candidate")

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: new Date(),
        time: "09:00",
        candidateId: "",
        interviewerIds: user?.id ? [user.id] : [],
    });
    

    const scheduleMeeting = async () =>{
        if(!client || !user) return;
        if(!formData.candidateId || formData.interviewerIds.length === 0){
            toast.error("Please select both candidate and atleast 1 interviewer ")
            return;
        }

        setIsCreating(true);

        try {
            const { title, description, date, time, candidateId, interviewerIds } = formData;
            const [hours, minutes] = time.split(":");
            const meetingDate = new Date(date);
            meetingDate.setHours(parseInt(hours), parseInt(minutes), 0);

            const id = crypto.randomUUID();
            const call = client.call("default", id);

            await call.getOrCreate({
                data: {
                starts_at: meetingDate.toISOString(),
                custom: {
                    description: title,
                    additionalDetails: description,
                },
                },
            });

            await createInterview({
                title,
                description,
                startTime: meetingDate.getTime(),
                status: "upcoming",
                streamCallId: id,
                candidateId,
                interviewerIds,
            });

            setOpen(false);
            toast.success("Meeting scheduled successfully!");

            setFormData({
                title: "",
                description: "",
                date: new Date(),
                time: "09:00",
                candidateId: "",
                interviewerIds: user?.id ? [user.id] : [],
            });
        } catch (error) {
            console.error(error)
            toast.error("Failed to schedule meeting. Please Try Again")
        } finally {
            setIsCreating(false)
        }
    }

    const addInterviewer = (interviewerId: string) => {
        if (!formData.interviewerIds.includes(interviewerId)) {
          setFormData((prev) => ({
            ...prev,
            interviewerIds: [...prev.interviewerIds, interviewerId],
          }));
        }
    };
    
    const removeInterviewer = (interviewerId: string) => {
        if (interviewerId === user?.id) return;
        setFormData((prev) => ({
          ...prev,
          interviewerIds: prev.interviewerIds.filter((id) => id !== interviewerId),
        }));
    };

    const selectedInterviewers = interviewers.filter((i) =>
        formData.interviewerIds.includes(i.clerkId)
    );
    
    const availableInterviewers = interviewers.filter(
        (i) => !formData.interviewerIds.includes(i.clerkId)
    );
    
  return (
    <div>InterviewScheduleUI</div>
  )
}

export default InterviewScheduleUI