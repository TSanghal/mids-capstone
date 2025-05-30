import '../shared.css';

const Motivation: React.FC = () => {
  return (
    <div>
      <h2>Motivation</h2>
      <p>In a world increasingly shaped by synthetic media, the line between real and fake is growing harder to discern, especially when it comes to voice. Audio deepfakes (voice recordings generated by AI to mimic real people) are no longer science fiction. They're here, and they're alarmingly convincing. Whether created through text-to-speech (TTS) systems or voice cloning, these fake voices replicate human tone, pitch, and rhythm with uncanny precision. In our project, we focus specifically on TTS-based deepfakes.</p>
      <h3>The Stakes are High</h3>
      <p>Audio deepfakes are already being used to:</p>
      <ul style={{
        color: '#33312e',
        margin: '0 auto',
        marginBottom: '15px',
        textAlign: 'justify',
        width: '80%'
      }}>
        <li style={{marginBottom: '15px'}}>Scam individuals and businesses through impersonation fraud,</li>
        <li style={{marginBottom: '15px'}}>Manipulate public opinion via fake speeches or interviews,</li>
        <li style={{marginBottom: '15px'}}>Undermine trust in institutions, leaders, and each other.</li>
      </ul>
      <p>As these tools become more accessible, so does their potential for harm. This makes detection not just a technical challenge but a societal imperative. But there's a deeper issue: bias.</p>
      <h3>Bias in Models Today</h3>
      <p>Many state-of-the-art detection systems boast high accuracy. But zoom in, and a troubling pattern emerges - they often underperform on voices that deviate from the data they were trained on. Think accents. Think regional dialects. Think gender. A system might work well on British English but stumble on Nigerian, Indian, or German English. It may unfairly flag female speakers or non-native speakers as deepfakes, even when they're authentic. This isn't just a technical flaw, it's an ethical one. Imagine a world where only certain voices are protected by technology. Where some communities are more vulnerable to fraud than others. We believe that's unacceptable.</p>
      <h3>Our Vision</h3>
      <p>That's why our project is driven by one core question: can we build an audio deepfake detector that works fairly for everyone, regardless of accent or gender? We set out to design a system that doesn't just detect fake voices, but does so equitably. In machine learning terms, we focus on equality of odds: making sure that different demographic groups have similar false positive rates. In simple terms, this means ensuring that no group is disproportionately misclassified as fake. This is the motivation that guides our work. Now, let's explore how we turn that vision into reality!</p>
    </div>
  );
};

export default Motivation;