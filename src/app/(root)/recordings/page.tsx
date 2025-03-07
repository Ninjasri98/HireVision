"use client";

import LoaderUI from "@/components/LoaderUI";
import useGetCalls from "@/hooks/useGetCalls";
import { CallRecording } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

function RecordingsPage() {
  const {calls,isLoading} = useGetCalls()
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  useEffect(()=>{
    const fetchRecordings = async () => {
      if (!calls) return;

      try {
        // Get recordings for each call
        const callData = await Promise.all(calls.map((call) => call.queryRecordings()));
        const allRecordings = callData.flatMap((call) => call.recordings);

        setRecordings(allRecordings);
      } catch (error) {
        console.log("Error fetching recordings:", error);
      }
    };

    fetchRecordings();

  },[calls])

  if (isLoading) return <LoaderUI />;

  
  return (
    <div>RecordingsPage</div>
  )
}

export default RecordingsPage