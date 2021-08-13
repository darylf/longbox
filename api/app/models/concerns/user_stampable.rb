module UserStampable
  extend ActiveSupport::Concern
  included do
    attr_accessible :created_by
    attr_accessible :updated_by
    belongs_to :created_by, class_name: "User", foreign_key: :created_by_id
    belongs_to :updated_by, class_name: "User", foreign_key: :updated_by_id
    before_create :user_stamp_create
    before_create :user_stamp_update
  end

  def user_stamp_create
    self.created_by = current_user
    self.updated_by = current_user
  end

  def user_stamp_update
    self.updated_by = current_user
  end
end

