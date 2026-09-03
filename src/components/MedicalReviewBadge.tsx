import React from "react";

interface MedicalReviewBadgeProps {
  reviewerName?: string;
  reviewerTitle?: string;
  reviewedDate?: string;
}

export default function MedicalReviewBadge({
  reviewerName = "Dr. Ayşe Kaya",
  reviewerTitle = "BDS, MSc Aesthetic Dentistry — Istanbul, Turkey",
  reviewedDate,
}: MedicalReviewBadgeProps) {
  return (
    <div className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl px-4 py-3 text-sm mb-6 shadow-sm shadow-blue-900/5">
      <div className="bg-gradient-to-br from-[#1e40af] to-blue-600 text-white rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center font-bold text-base mt-0.5 shadow-sm">
        🦷
      </div>
      <div>
        <p className="font-semibold text-gray-900">
          Medically reviewed by{" "}
          <span className="text-[#1e40af]">{reviewerName}</span>
        </p>
        <p className="text-gray-500 text-xs">{reviewerTitle}</p>
        {reviewedDate && (
          <p className="text-gray-400 text-xs mt-0.5">Last reviewed: {reviewedDate}</p>
        )}
      </div>
    </div>
  );
}
