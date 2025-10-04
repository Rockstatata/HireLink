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

export default {
  generateJobDescription
};