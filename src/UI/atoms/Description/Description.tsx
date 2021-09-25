type DescriptionProps = {
  label: string;
  content: string;
};

const Description: React.FC<DescriptionProps> = ({ label, content }) => (
  <p>
    <span>{label}</span>: <span>{content}</span>
  </p>
);

export default Description;
