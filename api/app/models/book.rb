class Book < ApplicationRecord
  belongs_to :book_format, optional: true
  belongs_to :created_by, class_name: "User"
  belongs_to :series, optional: true
  belongs_to :updated_by, class_name: "User"

  has_one :publisher, through: :series

  has_many :credits, dependent: :destroy do
    def featured
      where(featured: true)
    end
  end

  has_many :creators, through: :credits

  delegate :name, to: :series, prefix: true, allow_nil: true
  delegate :name, to: :publisher, prefix: true, allow_nil: true
  delegate :name, to: :book_format, prefix: true, allow_nil: true

  alias_attribute :format, :book_format_name

  def cover_image(type: nil)
    case type
    when "gif"
      extension = "gif"
    when "jpg"
      extension = "jpg"
    else
      extension = "png"
    end

    {
      height: 1024,
      url: "https://via.placeholder.com/633x1024,#{extension}?text=#{ERB::Util.url_encode(display_name)}",
      width: 633
    }
  end

  def display_name
    "#{series.name} ##{issue}"
  end

  def featured_creators
    credits.featured.order(:position).map do |credit| credit.creator end
  end
end
