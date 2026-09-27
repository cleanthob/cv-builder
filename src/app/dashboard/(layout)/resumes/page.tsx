import { ResumeList } from "@/components/pages/dashboard/resumes/resumes-list";
import { Suspense } from "react";
import { ResumesListSkeleton } from "./skeleton";

export default function DashboardResumes() {
  return (
    <>
      <h1 className="text-4xl font-title font-bold mb-6">Resumes</h1>
      <Suspense fallback={<ResumesListSkeleton />}>
        <ResumeList />
      </Suspense>
    </>
  );
}
