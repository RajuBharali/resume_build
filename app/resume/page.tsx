import { Metadata } from 'next';
import ResumePageClient from '@/components/resume/ResumePageClient';

export const metadata: Metadata = {
    title: 'Resume Builder',
    description: 'Create a professional resume in minutes with our easy-to-use builder.',
};

export default function ResumePage() {
    return <ResumePageClient />;
}
