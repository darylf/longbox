# Book model represents a single released issue or trade
class Book < ApplicationRecord
  belongs_to :series
  has_many :relations, dependent: :destroy
  has_many :creators, through: :relations
  has_one_attached :image

  enum book_type: { unknown: 0, issue: 1, trade: 2 }
  accepts_nested_attributes_for :relations

  delegate :name, to: :series, prefix: true
  delegate :publisher_name, to: :series

  validate :attachment_size_validation
  validate :attachment_type_validation

  def display_name
    name.presence || "#{series.name} ##{issue}"
  end

  def image_url
    if image.attached? && image.image?
      image.variant(resize: '267x400')
    else
      'http://via.placeholder.com/267x400?text=Cover+Image'
    end
  end

  private

  def attachment_size_validation
    return unless image.attached?
    return unless image.blob.byte_size > 1_000_000

    image.purge
    errors[:base] << 'Image is too big'
  end

  def attachment_type_validation
    return unless image.attached?
    return if image.blob.content_type.starts_with?('image/')

    image.purge
    errors[:base] << 'Image is invalid format'
  end
end
