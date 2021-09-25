type DescriptionProps = {
  label: string;
  content: string | number;
};

const Description: React.FC<DescriptionProps> = ({ label, content }) => (
  <p>
    <b>{label}</b>: <span>{content}</span>
  </p>
);

export default Description;
