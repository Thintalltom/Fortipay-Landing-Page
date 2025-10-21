
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestimonialCard = ({ rating, message, name, role, image }: any) => {
  return (
    <div className="w-[350px] h-[420px] cursor-pointer flex flex-col justify-between bg-white shadow-md border border-gray-200 rounded-xl p-6">
      {/* Stars */}
      <div className="text-yellow-500 text-xl ">
        {"★".repeat(rating)}
      </div>

      {/* Message */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {message}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-[10px] text-gray-700 text-center">
          {image}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
