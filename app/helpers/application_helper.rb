# Application helper
module ApplicationHelper
  def page_title
    if content_for?(:page_title)
      subtitle = " | #{content_for(:page_title)}"
    end

    "Longbox#{subtitle}"
  end
end
