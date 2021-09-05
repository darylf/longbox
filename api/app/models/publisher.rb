class Publisher < ApplicationRecord
  belongs_to :created_by, class_name: "User"
  belongs_to :updated_by, class_name: "User"

  has_many :series, dependent: :restrict_with_error

  validates :name, presence: true, length: { maximum: 120 }, uniqueness: true

  delegate :count, to: :series, prefix: true

  def book_count
    series.sum(&:book_count)
  end

  def logo(type: nil)
    case type
    when "gif"
      extension = "gif"
    when "jpg"
      extension = "jpg"
    else
      extension = "png"
    end

    {
      height: 90,
      url: "https://via.placeholder.com/600x200.#{extension}?text=#{ERB::Util.url_encode(name)}",
      width: 728,
    }
  end
end
