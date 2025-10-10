// OpenAI service for generating job descriptions
// This is a placeholder implementation - in production you'd connect to actual OpenAI API

export const generateJobDescription = async (jobDetails) => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate a basic job description based on the input
    const { title, category, skills = [], experience = {}, workMode = 'onsite' } = jobDetails;
    
    const description = `
<h2>About the Role</h2>
<p>We are seeking a talented <strong>${title}</strong> to join our dynamic team. This ${workMode} position offers an exciting opportunity to work in the ${category} field.</p>

<h3>Key Responsibilities:</h3>
<ul>
  <li>Develop and maintain high-quality solutions</li>
  <li>Collaborate with cross-functional teams</li>
  <li>Participate in code reviews and technical discussions</li>
  <li>Contribute to product development and innovation</li>
</ul>

<h3>Required Skills:</h3>
<ul>
  ${skills.map(skill => `<li>${skill}</li>`).join('')}
</ul>

<h3>Experience Requirements:</h3>
<p>We are looking for candidates with ${experience.min || 0}-${experience.max || 5} years of relevant experience.</p>

<h3>What We Offer:</h3>
<ul>
  <li>Competitive salary and benefits</li>
  <li>Professional development opportunities</li>
  <li>Collaborative and inclusive work environment</li>
  <li>Flexible working arrangements</li>
</ul>

<p>Join us and be part of a team that's making a difference!</p>
    `.trim();
    
    return description;
  } catch (error) {
    console.error('Error generating job description:', error);
    throw new Error('Failed to generate job description');
  }
};

export const generateJobRecommendations = async (userProfile, jobs) => {
  try {
    // Simulate AI analysis - in production, use OpenAI API
    await new Promise(resolve => setTimeout(resolve, 500));

    const { skills = [], experience = 0, location, jobPreferences = {} } = userProfile;

    // Simple matching logic based on skills and experience
    const recommendations = jobs
      .filter(job => {
        const skillMatch = job.skills?.some(skill => skills.includes(skill)) || false;
        const experienceMatch = job.experience <= experience + 2; // Allow some flexibility
        const locationMatch = !location || !job.location || job.location.toLowerCase().includes(location.toLowerCase());

        return skillMatch && experienceMatch && locationMatch;
      })
      .sort((a, b) => {
        // Sort by relevance (number of matching skills)
        const aMatches = a.skills?.filter(skill => skills.includes(skill)).length || 0;
        const bMatches = b.skills?.filter(skill => skills.includes(skill)).length || 0;
        return bMatches - aMatches;
      })
      .slice(0, 5); // Top 5 recommendations

    return recommendations;
  } catch (error) {
    console.error('Error generating job recommendations:', error);
    throw new Error('Failed to generate job recommendations');
  }
};

export const matchCandidates = async (job, applicants) => {
  try {
    // Simulate AI matching - in production, use OpenAI API
    await new Promise(resolve => setTimeout(resolve, 500));

    const { skills: jobSkills = [], experience: jobExp = 0 } = job;

    const matches = applicants
      .map(applicant => {
        const userSkills = applicant.userProfile?.skills || [];
        const userExp = applicant.userProfile?.yearsOfExperience || 0;

        const skillScore = jobSkills.filter(skill => userSkills.includes(skill)).length / jobSkills.length;
        const expScore = Math.max(0, 1 - Math.abs(userExp - jobExp) / 5); // Normalize experience difference

        const totalScore = (skillScore * 0.7) + (expScore * 0.3); // Weighted score

        return { ...applicant.toObject(), matchScore: totalScore };
      })
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 10); // Top 10 matches

    return matches;
  } catch (error) {
    console.error('Error matching candidates:', error);
    throw new Error('Failed to match candidates');
  }
};

export const analyzeSkillGaps = async (userProfile, targetJob) => {
  try {
    // Simulate AI analysis - in production, use OpenAI API
    await new Promise(resolve => setTimeout(resolve, 500));

    const userSkills = userProfile.skills || [];
    const jobSkills = targetJob.skills || [];
    const userExp = userProfile.yearsOfExperience || 0;
    const jobExp = targetJob.experience || 0;

    const missingSkills = jobSkills.filter(skill => !userSkills.includes(skill));
    const expGap = Math.max(0, jobExp - userExp);

    return {
      missingSkills,
      experienceGap: expGap,
      recommendations: missingSkills.map(skill => `Learn ${skill} through online courses or projects`)
    };
  } catch (error) {
    console.error('Error analyzing skill gaps:', error);
    throw new Error('Failed to analyze skill gaps');
  }
};

export default {
  generateJobDescription,
  generateJobRecommendations,
  matchCandidates,
  analyzeSkillGaps
};